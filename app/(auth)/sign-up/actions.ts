"use server";
import bcrypt from "bcryptjs";
import { db } from "../../lib/db";
import { UserSchema } from "./signup-schema";
import { createSession } from "../../lib/session";

export type SignupState = {
  errors: {
    email?: string[];
    password?: string[];
  };
  success: boolean;
};
export async function signup(
  prevState: SignupState,
  formData: FormData,
): Promise<SignupState> {
  const data = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  const result = UserSchema.safeParse(data);

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      success: false,
    };
  }
  const { email, password } = result.data;

  const existedUser = await db.user.findUnique({ where: { email } });
  if (existedUser) {
    return {
      errors: { email: ["User already exists"] },
      success: false,
    };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await db.user.create({
    data: { email, password: hashedPassword },
  });

  await createSession(user.id);

  return {
    success: true,
    errors: {},
  };
}
