"use client";

import { useState } from "react";
import Image from "next/image";
import { Card, Button, Input } from "@heroui/react";
import { FaCalendarCheck, FaEdit, FaTrash, FaUser, FaEnvelope } from "react-icons/fa";

const inputStyles = {
  label: "text-slate-300 text-xs",
  input: "text-white placeholder:text-slate-500 text-sm",
  inputWrapper: [
    "h-11",
    "border",
    "border-cyan-400/20",
    "bg-[#0F172A]/70",
    "backdrop-blur-xl",
  ],
};

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <section className="min-h-screen bg-[#0B1120] px-4 py-10">
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-5">
          <h1 className="text-2xl font-extrabold text-white">Dashboard</h1>
          <p className="mt-1 text-sm text-slate-400">
            Manage your appointments and profile easily.
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-5 flex gap-3">
          {["bookings", "profile"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-white"
                  : "border border-white/10 bg-[#111827] text-slate-400"
              }`}
            >
              {tab === "bookings" ? "My Bookings" : "My Profile"}
            </button>
          ))}
        </div>

        {/* ── MY BOOKINGS ── */}
        {activeTab === "bookings" && (
          <div className="grid gap-4 lg:grid-cols-2">
            {[1, 2].map((item) => (
              <Card
                key={item}
                className="rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl"
              >
                <div className="p-4">
                  <div className="flex gap-4">

                    {/* Doctor Image */}
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                      <Image src="/doctor.jpg" alt="doctor" fill className="object-cover" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h2 className="text-base font-bold text-white">Dr. Ayesha Rahman</h2>
                          <p className="text-xs text-cyan-300">Cardiologist</p>
                        </div>
                        <span className="shrink-0 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300">
                          Confirmed
                        </span>
                      </div>

                      {/* Appointment Info */}
                      <div className="mt-2 space-y-1">
                        <div className="flex items-center gap-2 text-slate-300">
                          <FaCalendarCheck size={12} className="text-cyan-300" />
                          <p className="text-xs">12 May 2026 — 10:30 AM</p>
                        </div>
                        <p className="text-xs text-slate-400">Hospital: Labaid Cardiac Hospital</p>
                        <p className="text-xs text-slate-400">Patient: Rahim Uddin</p>
                      </div>

                      {/* Buttons */}
                      <div className="mt-3 flex gap-2">
                        <Button
                          size="sm"
                          radius="lg"
                          className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-xs font-semibold text-white"
                          startContent={<FaEdit size={11} />}
                        >
                          Update
                        </Button>
                        <Button
                          size="sm"
                          radius="lg"
                          variant="bordered"
                          className="border-red-500/30 text-xs text-red-400 hover:bg-red-500/10"
                          startContent={<FaTrash size={11} />}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}

        {/* ── MY PROFILE ── */}
        {activeTab === "profile" && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-[#111827]/70 p-6 backdrop-blur-xl">

            {/* Profile Top */}
            <div className="flex items-center gap-5">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full border-4 border-cyan-400/30">
                <Image src="/user.jpg" alt="user" fill className="object-cover" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white">Toufik Hossain</h2>
                <p className="text-xs text-slate-400">Patient Dashboard Profile</p>
              </div>
            </div>

            {/* Form */}
            <div className="mt-5 grid gap-3">
              <Input
                label="Full Name"
                labelPlacement="outside"
                placeholder="Enter your name"
                defaultValue="Toufik Hossain"
                startContent={<FaUser className="text-cyan-300" size={13} />}
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                defaultValue="toufik@gmail.com"
                isReadOnly
                startContent={<FaEnvelope className="text-cyan-300" size={13} />}
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />
              <Input
                label="Photo URL"
                labelPlacement="outside"
                placeholder="Enter photo URL"
                defaultValue="https://example.com/user.jpg"
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />

              <Button
                radius="lg"
                className="mt-2 h-11 bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-sm font-semibold text-white shadow-lg shadow-cyan-500/20"
              >
                Update Profile
              </Button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default DashboardPage;