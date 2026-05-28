"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Button, Input } from "@heroui/react";
import { FaCalendarAlt, FaClock, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";


const inputStyles = {
  label: "text-gray-700 text-sm font-medium pb-0.5",
  input: "text-gray-800 placeholder:text-gray-400 text-sm",
  inputWrapper: [
    "h-11",
    "!border",
    "!border-gray-300",
    "bg-white",
    "hover:!border-cyan-400",
    "focus-within:!border-cyan-500",
    "transition-all",
    "duration-300",
    "rounded-lg",
    "shadow-none",
  ],
};

export function BookingDialog({ doctor, userEmail }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const bookingData = {
      userEmail:   userEmail || e.target.userEmail.value,
      doctorName:  doctor?.name || "",
      doctorImage: doctor?.image || "",
      specialty:   doctor?.specialty || "",
      hospital:    doctor?.hospital || "",
      fee:         doctor?.fee || "",
      patientName: e.target.patientName.value,
      gender:      e.target.gender.value,
      phone:       e.target.phone.value,
      date:        e.target.date.value,
      time:        e.target.time.value,
      reason:      e.target.reason.value,
      status:      "Confirmed",
    };

    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();

      if (res.ok) {
        toast.success("Appointment booked successfully!");
        setIsOpen(false);
        e.target.reset();
      } else {
        toast.error(data?.message || "Booking failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
      >
        Book Appointment
      </button>

      {/* Portal Dialog */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-4">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Book Appointment</h2>
                <p className="text-sm text-gray-500">with {doctor?.name || "Doctor"}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-1 flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-6 py-5 space-y-4 max-h-[80vh] overflow-y-auto">

              {/* User Email */}
              <Input
                name="userEmail"
                label="User Email"
                labelPlacement="outside"
                placeholder="your@email.com"
                defaultValue={userEmail || ""}
                isReadOnly={!!userEmail}
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />

              {/* Doctor Name */}
              <Input
                label="Doctor Name"
                labelPlacement="outside"
                defaultValue={doctor?.name || ""}
                isReadOnly
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />

              {/* Patient Name */}
              <Input
                isRequired
                name="patientName"
                label="Patient Name *"
                labelPlacement="outside"
                placeholder="Full name"
                radius="lg"
                variant="bordered"
                classNames={inputStyles}
              />

              {/* Gender & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    required
                    className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 focus:border-cyan-500 focus:outline-none transition-all"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <Input
                  isRequired
                  name="phone"
                  label="Phone *"
                  labelPlacement="outside"
                  placeholder="01XXXXXXXXX"
                  radius="lg"
                  variant="bordered"
                  classNames={inputStyles}
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <div className="flex h-11 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-cyan-500 transition-all">
                    <FaCalendarAlt size={13} className="mr-2 shrink-0 text-gray-400" />
                    <input
                      name="date"
                      type="date"
                      required
                      className="w-full bg-transparent text-sm text-gray-800 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">
                    Time <span className="text-red-500">*</span>
                  </label>
                  <div className="flex h-11 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-cyan-500 transition-all">
                    <FaClock size={13} className="mr-2 shrink-0 text-gray-400" />
                    <input
                      name="time"
                      type="time"
                      required
                      className="w-full bg-transparent text-sm text-gray-800 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Reason (optional)</label>
                <textarea
                  name="reason"
                  placeholder="Brief reason for visit"
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Booking..." : "Confirm Booking"}
              </button>

            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}