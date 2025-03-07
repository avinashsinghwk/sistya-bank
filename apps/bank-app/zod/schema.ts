import z from "zod";

export const registerAccountSchema = z
  .object({
    number: z
      .string()
      .length(10, { message: "Number should be exactly of 10 digits" }),
    name: z.string().min(1, { message: "Name is required" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    otp: z.string().length(6, { message: "Otp should be of 6 digits" }),
  })
  .strict();

export type registerAccountSchemaType = z.infer<typeof registerAccountSchema>;

export const loginSchema = z
  .object({
    number: z
      .string()
      .length(10, { message: "Number should be exactly of 10 digits" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
  })
  .strict();

export type loginSchemaType = z.infer<typeof loginSchema>;
