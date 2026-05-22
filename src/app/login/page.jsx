"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Input, Button } from "@heroui/react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

const inputStyles = {
  label: "text-slate-300 text-xs pb-0.5",
  input: "text-white placeholder:text-slate-500 text-sm",
  inputWrapper: [
    "h-11",
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
  errorMessage: "text-red-400 text-xs mt-0.5",
  description: "text-slate-500 text-xs mt-0.5",
};

const LoginForm = () => {
  const onSubmit = async (e) => {
          e.preventDefault()
          const email = e.target.email.value
          const password = e.target.password.value
          const { data, error } = await authClient.signIn.email({
              email,
              password,
              callbackURL: "/"
          })
          console.log(data, error)
      }
      const handleGoogleLogin = async()=>{
          await authClient.signIn.social({
            provider:'google'
          })
        }


  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4">

      <div className="w-full max-w-sm rounded-3xl border border-cyan-400/20 bg-[#111827]/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">

        {/* Header */}
        <div className="mb-6 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <p className="text-xs font-medium tracking-wide text-cyan-300">WELCOME BACK</p>
          </div>

          <h1 className="text-3xl font-extrabold text-white">Login</h1>

          <p className="mt-2 text-xs leading-relaxed text-slate-400">
            Access your healthcare dashboard and manage appointments.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={onSubmit} className="space-y-4">

          <Input
            isRequired
            type="email"
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="john@example.com"
            startContent={<FaEnvelope size={13} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            validate={(v) => {
              if (!v) return "Email is required";
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v))
                return "Enter a valid email";
              return null;
            }}
            classNames={inputStyles}
          />

          <Input
            isRequired
            type="password"
            name="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            startContent={<FaLock size={13} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            description="Min 8 chars, 1 uppercase & 1 number"
            validate={(v) => {
              if (!v) return "Password is required";
              if (v.length < 8) return "At least 8 characters";
              if (!/[A-Z]/.test(v)) return "Add an uppercase letter";
              if (!/[0-9]/.test(v)) return "Add a number";
              return null;
            }}
            classNames={inputStyles}
          />

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-xs font-medium text-cyan-300 hover:text-cyan-200">
              Forgot Password?
            </Link>
          </div>

          <Button
            type="submit"
            radius="lg"
            className="h-11 w-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:scale-[1.02] transition-all duration-300"
          >
            Login
          </Button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs text-slate-500">OR CONTINUE WITH</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}
        <Button
        onClick={handleGoogleLogin }
          radius="lg"
          variant="bordered"
          startContent={<FaGoogle size={13} className="text-cyan-300" />}
          className="h-11 w-full border border-cyan-400/20 bg-[#0F172A]/70 text-sm font-semibold text-white backdrop-blur-xl hover:border-cyan-400/40 hover:bg-cyan-500/10 transition-all duration-300"
        >
          Continue with Google
        </Button>

        <p className="mt-5 text-center text-xs text-slate-400">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;