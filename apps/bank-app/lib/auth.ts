import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@repo/db/prisma";
import { NextAuthOptions, Session } from "next-auth";
import { JWT } from "next-auth/jwt";
import bcrypt from "bcryptjs";
import { loginSchema } from "@/zod/schema";

export const Auth_Options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        number: { label: "Phone number", type: "number", placeholder: "12345" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },
      async authorize(credentials) {
        if (!credentials) return null;
        const { success } = loginSchema.safeParse({
          number: credentials.number,
          password: credentials.password,
        });
        if (!success) return null;
        try {
          const userExisted = await prisma.user.findFirst({
            where: { number: credentials.number },
          });
          if (!userExisted || !userExisted.isVerified) return null;
          if (
            !(await bcrypt.compare(credentials.password, userExisted.password!))
          )
            return null;
          return {
            id: userExisted.id,
            name: userExisted.name,
          };
        } catch (e: unknown) {
          console.log(`Error happened while signup `, e);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) {
      if (session.user && token.sub) session.user.id = token.sub;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "",
  pages: {
    signIn: "/login",
  },
};
