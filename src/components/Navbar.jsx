"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";

const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "All Appointment",
    path: "/allAppointments",
  },
  {
    name: "Dashboard",
    path: "/dashboard",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = authClient.useSession()
  const user = session?.user;
  console.log("User in Navbar:", user);
  const handelLogout = async () => {
    await authClient.signOut();
  }
  return (
    <header className=" border-b border-white/10 bg-[#0F172A]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="DocAppoint Logo"
            width={200}
            height={100}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 lg:flex">
          <ul className="flex items-center justify-center gap-8 px-60">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  href={link.path}
                  className={`relative text-sm font-medium transition-all duration-300 ${pathname === link.path
                      ? "text-[#38BDF8]"
                      : "text-slate-300 hover:text-cyan-300"
                    }`}
                >
                  {link.name}

                  {pathname === link.path && (
                    <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#38BDF8] to-[#06B6D4]" />
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons */}
          {/* <div>
          {user ? (
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur-xl">
                <Image
                  src='shawon.png'
                  alt="user"
                  width={42}
                  height={42}
                  className="rounded-full border border-cyan-400/30 object-cover"
                />

                <span className="pr-3 text-sm font-medium text-white">
                  {user.name}
                </span>
              </div>

              <button onClick={handelLogout} className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                Logout
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link href="/login">
                <button className="rounded-xl border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button  className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                  Register
                </button>
              </Link>
            </div>
          )}
          </div> */}


          <div className="navbar-end gap-4">
            {!user && <div className="flex items-center gap-4">

              <Link href="/login">
                <button className="rounded-xl border border-cyan-400/30 px-5 py-2 text-sm font-semibold text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                  Login
                </button>
              </Link>

              <Link href="/register">
                <button className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                  Register
                </button>
              </Link>
            </div>}
            {user && <div className="flex items-center gap-4">
              <Avatar className="border border-cyan-400/30 bg-white/5 px-2 py-1 backdrop-blur-xl rounded-full">
                <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy='no-referrer' />
                <Avatar.Fallback>{user?.name[0]}</Avatar.Fallback>
              </Avatar>
              <button onClick={handelLogout} className="rounded-xl border border-cyan-400/30 bg-gradient-to-r from-[#eb252f] to-[#d42506] px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                Logout
              </button>

            </div>}
          </div>
        </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-[#0F172A] lg:hidden">
          <div className="space-y-5 px-6 py-6">
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 ${pathname === link.path
                        ? "bg-cyan-500/10 text-cyan-300"
                        : "text-slate-300 hover:bg-white/5"
                      }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {user ? (
              <div className="space-y-4 border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <Image
                    src={user.image}
                    alt="user"
                    width={45}
                    height={45}
                    className="rounded-full border border-cyan-400/30"
                  />

                  <div>
                    <h3 className="font-semibold text-white">
                      {user.name}
                    </h3>
                    <p className="text-sm text-slate-400">
                      Login
                    </p>
                  </div>
                </div>

                <button className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 py-3 font-semibold text-white">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-3 border-t border-white/10 pt-5">
                <Link href="/login">
                  <button className="w-full rounded-xl border border-cyan-400/30 px-5 py-3 font-semibold text-cyan-300">
                    Login
                  </button>
                </Link>

                <Link href="/register">
                  <button className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-5 py-3 font-semibold text-white">
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
       </nav>
    </header>
  );
}
