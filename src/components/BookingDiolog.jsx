"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { FaCalendarAlt, FaClock, FaTimes } from "react-icons/fa";
import toast from "react-hot-toast";


const inputClass = "h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all";
const labelClass = "text-sm font-medium text-gray-700";

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
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings`, {
        cache: 'no-store',
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
      toast.error("Server error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
      >
        Book Appointment
      </button>

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
            <div className="flex items-start justify-between border-b border-gray-100 px-6 py-2">
              <div>
                <h2 className="text-lg font-bold text-gray-800">Book Appointment</h2>
                <p className="text-sm text-gray-500">with {doctor?.name || "Doctor"}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition"
              >
                <FaTimes size={13} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-2 px-5 py-4 max-h-[75vh] overflow-y-auto">

              {/* User Email */}
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>User Email</label>
                <input
                  name="userEmail"
                  type="email"
                  defaultValue={userEmail || ""}
                  readOnly={!!userEmail}
                  placeholder="your@email.com"
                  className={`${inputClass} ${userEmail ? "bg-gray-50 text-gray-500 cursor-not-allowed" : ""}`}
                />
              </div>

            
              {/* Patient Name */}
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Patient Name <span className="text-red-500">*</span></label>
                <input
                  name="patientName"
                  type="text"
                  required
                  placeholder="Full name"
                  className={inputClass}
                />
              </div>

              {/* Gender & Phone */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Gender <span className="text-red-500">*</span></label>
                  <select
                    name="gender"
                    required
                    className={inputClass}
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Phone <span className="text-red-500">*</span></label>
                  <input
                    name="phone"
                    type="text"
                    required
                    placeholder="01XXXXXXXXX"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Date <span className="text-red-500">*</span></label>
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

                <div className="flex flex-col gap-1.5">
                  <label className={labelClass}>Time <span className="text-red-500">*</span></label>
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
              <div className="flex flex-col gap-1.5">
                <label className={labelClass}>Reason (optional)</label>
                <textarea
                  name="reason"
                  placeholder="Brief reason for visit"
                  rows={2}
                  className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all resize-none"
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