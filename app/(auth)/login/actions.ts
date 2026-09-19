"use server";

import { db } from "../../lib/db";
import { createSession } from "../../lib/session";
import { UserSchema } from "../sign-up/signup-schema";
import bcrypt from "bcryptjs";

export async function login(prevState: unknown, formData: FormData) {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = UserSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      message: "",
    };
  }

  const { email, password } = result.data;

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return {
      errors: {},
      message: "Invalid credentials",
    };
  }

  const valid = await bcrypt.compare(password, user.password);

  if (!valid) {
    return {
      errors: {},
      message: "Invalid credentials",
    };
  }

  await createSession(user.id);

  return {
    success: true,
    errors: {},
    message: "",
  };
}
