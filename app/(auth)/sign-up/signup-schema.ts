import { z } from "zod";

export const UserSchema = z.object({
  email: z.email({ error: "please enter a valid email" }),
  password: z
    .string()
    .min(8, { error: "password must be at least 8 characters" }),
});
