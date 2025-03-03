"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const session = useSession();
  return (
    <div>
      <div className="text-4xl bg-red-700 font-bold text-center text-white">
        Hello bank bahiya
      </div>
      <br />
      <br />
      <br />
      <Button className="cursor-pointer">Hello</Button>
      <Button variant={"destructive"} className="cursor-pointer">
        Hello
      </Button>
      <Button variant={"ghost"} className="cursor-pointer">
        Hello
      </Button>
      <Button variant={"link"} className="cursor-pointer">
        Hello
      </Button>
      <Button variant={"outline"} className="cursor-pointer">
        Hello
      </Button>
      <Button variant={"secondary"} className="cursor-pointer">
        Hello
      </Button>
      <br />
      <br />
      <br />
      {!session.data ? (
        <Button
          onClick={() => {
            signIn();
          }}
          className=" bg-blue-900 text-white font-bold"
        >
          Sign in
        </Button>
      ) : (
        <Button
          onClick={() => {
            signOut();
          }}
          className="px-8 py-2 bg-yellow-900 text-white font-bold"
        >
          Sign Out
        </Button>
      )}{" "}
    </div>
  );
}
