"use client";

import Link from "next/link";
import { Input, Button, Form } from "@heroui/react";
import { FaGoogle, FaEnvelope, FaLock, FaUser, FaImage } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const inputStyles = {
  label: "text-slate-300 text-xs pb-0.5",
  input: "text-white placeholder:text-slate-500 text-sm",
  inputWrapper: [
    "h-11",
    "!border",
    "!border-cyan-400/30",
    "bg-[#0F172A]",
    "hover:!border-cyan-400/60",
    "focus-within:!border-cyan-400",
    "transition-all",
    "duration-300",
    "rounded-xl",
  ],
  errorMessage: "text-red-400 text-xs mt-0.5",
  description: "text-slate-500 text-xs mt-0.5",
};

const RegisterForm = () => {
  const router = useRouter();

  const onSubmit = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const image = e.target.image.value;
    const password = e.target.password.value;

    const { error } = await authClient.signUp.email(
      { name, email, password, image },
      {
        onRequest: () => {},
        onSuccess: () => toast.success("Registration successful!"),
        onError: (ctx) => alert(ctx.error.message),
      }
    );

    if (!error) router.push("/login");
  };

  const handleGoogleRegister = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/login",
    });
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#0B1120] px-4">

      <div className="w-full max-w-sm rounded-3xl border border-cyan-400/20 bg-[#111827]/70 p-6 shadow-2xl shadow-cyan-500/10 backdrop-blur-2xl">

        {/* Header */}
        <div className="mb-5 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
            <p className="text-xs font-medium tracking-wide text-cyan-300">CREATE ACCOUNT</p>
          </div>
          <h1 className="text-3xl font-extrabold text-white">Register</h1>
          <p className="mt-2 text-xs text-slate-400">
            Create your account to book appointments easily.
          </p>
        </div>

        {/* Form */}
        <Form className="space-y-3" onSubmit={onSubmit}>

          <Input
            isRequired
            type="text"
            name="name"
            label="Name"
            labelPlacement="outside"
            placeholder="Enter your name"
            startContent={<FaUser size={12} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            classNames={inputStyles}
          />

          <Input
            isRequired
            type="email"
            name="email"
            label="Email"
            labelPlacement="outside"
            placeholder="john@example.com"
            startContent={<FaEnvelope size={12} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            validate={(v) => {
              if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(v))
                return "Please enter a valid email address";
              return null;
            }}
            classNames={inputStyles}
          />

          <Input
            isRequired
            type="text"
            name="image"
            label="Photo URL"
            labelPlacement="outside"
            placeholder="Enter photo url"
            startContent={<FaImage size={12} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            classNames={inputStyles}
          />

          <Input
            isRequired
            type="password"
            name="password"
            label="Password"
            labelPlacement="outside"
            placeholder="Enter your password"
            startContent={<FaLock size={12} className="text-cyan-300 shrink-0" />}
            radius="lg"
            variant="bordered"
            description="Min 8 chars, 1 uppercase & 1 number"
            validate={(v) => {
              if (v.length < 8) return "At least 8 characters required";
              if (!/[A-Z]/.test(v)) return "Add at least one uppercase letter";
              if (!/[0-9]/.test(v)) return "Add at least one number";
              return null;
            }}
            classNames={inputStyles}
          />

          {/* Password Rules */}
          <div className="flex flex-wrap gap-x-3 text-xs text-slate-400">
            <p>• Min 6 characters</p>
            <p>• 1 uppercase</p>
            <p>• 1 lowercase</p>
          </div>

          {/* Register Button */}
          <Button
            type="submit"
            radius="lg"
            className="h-11 w-full bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.02]"
          >
            Register
          </Button>

        </Form>

        {/* Divider */}
        <div className="my-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-xs text-slate-500">OR CONTINUE WITH</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Google */}
        <Button
          radius="lg"
          variant="bordered"
          onClick={handleGoogleRegister}
          startContent={<FaGoogle size={13} className="text-cyan-300" />}
          className="h-11 w-full border border-cyan-400/20 bg-[#0F172A]/70 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-500/10"
        >
          Continue with Google
        </Button>

        <p className="mt-5 text-center text-xs text-slate-400">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-cyan-300 hover:text-cyan-200 transition-all duration-300">
            Login
          </Link>
        </p>

      </div>
    </section>
  );
};

export default RegisterForm;