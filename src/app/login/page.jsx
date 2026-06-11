"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FaGoogle, FaEnvelope, FaLock } from "react-icons/fa";

const LoginForm = () => {
  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const { data, error } = await authClient.signIn.email({
      email,
      password,
      callbackURL: "/",
    });
    console.log(data, error);
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({ provider: "google" });
  };

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

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-300">Email</label>
            <div className="flex h-11 items-center gap-2 rounded-xl border border-cyan-400/20 bg-[#0F172A]/70 px-3 backdrop-blur-xl transition-all focus-within:border-cyan-400 hover:border-cyan-400/40">
              <FaEnvelope size={13} className="shrink-0 text-cyan-300" />
              <input
                name="email"
                type="email"
                required
                placeholder="john@example.com"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs text-slate-300">Password</label>
            <div className="flex h-11 items-center gap-2 rounded-xl border border-cyan-400/20 bg-[#0F172A]/70 px-3 backdrop-blur-xl transition-all focus-within:border-cyan-400 hover:border-cyan-400/40">
              <FaLock size={13} className="shrink-0 text-cyan-300" />
              <input
                name="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
              />
            </div>
            <p className="text-xs text-slate-500">Min 8 chars, 1 uppercase & 1 number</p>
          </div>

          {/* Forgot */}
          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-xs font-medium text-cyan-300 hover:text-cyan-200">
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="h-11 w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs text-slate-500">OR CONTINUE WITH</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogleLogin}
          className="flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-cyan-400/20 bg-[#0F172A]/70 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
        >
          <FaGoogle size={13} className="text-cyan-300" />
          Continue with Google
        </button>

        <p className="mt-5 text-center text-xs text-slate-400">
          Donapos;t have an account?{" "}
          <Link href="/register" className="font-semibold text-cyan-300 hover:text-cyan-200">
            Register
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginForm;