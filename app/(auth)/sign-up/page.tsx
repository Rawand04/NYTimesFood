"use client";
import Link from "next/link";
import { signup, SignupState } from "./actions";
import { useActionState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const router = useRouter();
  const initialState: SignupState = {
    errors: {},
    success: false,
  };
  const [state, formAction] = useActionState(signup, initialState);

  useEffect(() => {
    if (state.success) {
      router.push("/");
    }
  }, [state.success, router]);

  return (
    <div className="shadow-sm mb-10 p-8 w-[70%] m-auto rounded ">
      <h1 className="text-center text-3xl font-bold mb-16 font-sourceserif">
        Sign Up
      </h1>
      <form className="flex flex-col gap-8 m-auto px-10" action={formAction}>
        <div className=" m-auto w-[60%]">
          <div className="flex flex-col gap-6">
            <label htmlFor="email" className="font-bold text-lg">
              Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              placeholder="Enter your email"
              className="p-2 shadow w-full"
              required
            />
            {state.errors?.email && (
              <p className="text-primary">{state.errors.email[0]}</p>
            )}{" "}
            <label htmlFor="password" className="font-bold text-lg">
              Password
            </label>
            <input
              name="password"
              type="password"
              id="password"
              placeholder="Enter a password"
              className="p-2 shadow"
              required
            />
            {state.errors?.password && (
              <p className="text-primary">{state.errors.password[0]}</p>
            )}{" "}
          </div>
        </div>
        <input
          type="submit"
          className="bg-primary hover:bg-primary-hover text-white rounded-full py-1 w-[20%] m-auto"
        />
        <Link href={`/login`} className="text-center">
          already have an account?{" "}
          <span className="text-primary underline">login</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
