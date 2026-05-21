"use client";

import Link from "next/link";
import { Input, Button } from "@heroui/react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

const inputStyles = {
  label: "text-slate-300 text-sm pb-1",
  input: "text-white placeholder:text-slate-500 text-sm",
  inputWrapper: [
    "h-14",
    "border",
    "border-cyan-400/20",
    "bg-[#0F172A]/70",
    "backdrop-blur-xl",
    "hover:border-cyan-400/40",
    "focus-within:!border-cyan-400",
    "transition-all",
    "duration-300",
    "rounded-xl",
  ],
  errorMessage: "text-red-400 text-xs mt-1",
  description: "text-slate-500 text-xs mt-1",
};

const LoginForm = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4 py-10">

      {/* Login Card */}
      <div className="w-full max-w-md rounded-[32px] border border-cyan-400/20 bg-[#111827]/70 p-7 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">

        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <p className="text-xs font-medium tracking-wide text-cyan-300">
              WELCOME BACK
            </p>
          </div>

          <h1 className="text-4xl font-extrabold text-white">Login</h1>

          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Login to access your healthcare dashboard and manage appointments securely.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-5">

          {/* Email */}
          <Input
            isRequired
            type="email"
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="john@example.com"
            startContent={<FaEnvelope className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            validate={(value) => {
              if (!value) return "Email is required";
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value))
                return "Please enter a valid email address";
              return null;
            }}
            classNames={inputStyles}
          />

          {/* Password */}
          <Input
            isRequired
            type="password"
            name="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            startContent={<FaLock className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            description="Must be at least 8 characters with 1 uppercase and 1 number"
            validate={(value) => {
              if (!value) return "Password is required";
              if (value.length < 8) return "Password must be at least 8 characters";
              if (!/[A-Z]/.test(value)) return "Must contain at least one uppercase letter";
              if (!/[0-9]/.test(value)) return "Must contain at least one number";
              return null;
            }}
            classNames={inputStyles}
          />

          {/* Forgot Password */}
          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-cyan-300 transition-all duration-300 hover:text-cyan-200"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <Button
            type="submit"
            radius="lg"
            className="h-14 w-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-sm text-slate-500">OR CONTINUE WITH</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google Login */}
        <Button
          radius="lg"
          variant="bordered"
          startContent={<FaGoogle className="text-cyan-300" />}
          className="h-14 w-full border border-cyan-400/20 bg-[#0F172A]/70 font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
        >
          Continue with Google
        </Button>

        {/* Register Link */}
        <p className="mt-7 text-center text-sm text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="font-semibold text-cyan-300 transition-all duration-300 hover:text-cyan-200"
          >
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;