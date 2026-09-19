"use client";
import Link from "next/link";
import { useActionState, useEffect } from "react";
import { login } from "./actions";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();

  const initialState = {
    errors: {},
    success: false,
    message: "",
  };
  const [state, formAction] = useActionState(login, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [router, state]);
  return (
    <div className="shadow mb-10 p-8 w-[70%] m-auto rounded ">
      <h1 className="text-center text-3xl font-bold mb-16 font-sourceserif">
        Login
      </h1>
      <form className="flex flex-col gap-8 m-auto px-10" action={formAction}>
        <div className="flex flex-col gap-8 justify-center">
          <div className="flex flex-col gap-6 w-[60%] m-auto">
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="p-2 shadow w-full"
              required
            />
            <label htmlFor="password" className="font-bold text-lg">
              Password
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter a password"
              className="p-2 shadow"
              required
            />
          </div>
          {state.message && (
            <p className="text-primary text-center">{state.message}</p>
          )}
        </div>
        <input
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white rounded-full py-1 w-[20%] m-auto"
        />

        <Link href={`/sign-up`} className="text-center">
          don't have an account?{" "}
          <span className="text-primary underline">sign up</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
