"use client";

import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "@heroui/react";
import { FaEdit, FaTimes, FaCalendarAlt, FaClock } from "react-icons/fa";
import toast from "react-hot-toast";

export function UpdateBooking({ booking, onUpdated }) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      patientName: e.target.patientName.value.trim(),
      date:        e.target.date.value,
      time:        e.target.time.value,
      reason:      e.target.reason.value.trim(),
    };

    try {
      setLoading(true);
      const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${booking._id}`, {
        cache: 'no-store',
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      });

      if (res.ok) {
        toast.success("Appointment updated successfully!");
        if (onUpdated) onUpdated({ ...booking, ...updatedData });
        setIsOpen(false);
      } else {
        toast.error("Update failed. Try again.");
      }
    } catch (err) {
      toast.error("Server error.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <Button
        size="sm"
        radius="lg"
        onPress={() => setIsOpen(true)}
        className="bg-gradient-to-r from-[#2563EB] to-[#06B6D4] text-xs font-semibold text-white"
        startContent={<FaEdit size={11} />}
      >
        Update
      </Button>

      {/* Portal Modal */}
      {isOpen && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
              <h2 className="text-base font-bold text-gray-800">Update Appointment</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-7 w-7 items-center justify-center rounded-full text-gray-400 transition hover:bg-gray-100 hover:text-gray-600"
              >
                <FaTimes size={12} />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 px-6 py-5">

              {/* Doctor — read only */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Doctor</label>
                <input
                  type="text"
                  value={booking?.doctorName || ""}
                  readOnly
                  className="h-11 w-full rounded-lg border border-cyan-400 bg-cyan-50/50 px-3 text-sm text-gray-700 outline-none cursor-not-allowed"
                />
              </div>

              {/* Patient Name */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Patient Name</label>
                <input
                  name="patientName"
                  type="text"
                  required
                  defaultValue={booking?.patientName || ""}
                  placeholder="Full name"
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Date</label>
                  <div className="flex h-11 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-cyan-500 transition-all">
                    <FaCalendarAlt size={12} className="mr-2 shrink-0 text-gray-400" />
                    <input
                      name="date"
                      type="date"
                      required
                      defaultValue={booking?.date || ""}
                      className="w-full bg-transparent text-sm text-gray-800 outline-none"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-gray-700">Time</label>
                  <div className="flex h-11 items-center rounded-lg border border-gray-300 bg-white px-3 focus-within:border-cyan-500 transition-all">
                    <FaClock size={12} className="mr-2 shrink-0 text-gray-400" />
                    <input
                      name="time"
                      type="time"
                      required
                      defaultValue={booking?.time || ""}
                      className="w-full bg-transparent text-sm text-gray-800 outline-none"
                    />
                  </div>
                </div>
              </div>

              {/* Reason */}
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Reason</label>
                <input
                  name="reason"
                  type="text"
                  defaultValue={booking?.reason || ""}
                  placeholder="Brief reason for visit"
                  className="h-11 w-full rounded-lg border border-gray-300 bg-white px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] py-3 text-sm font-semibold text-white shadow-md transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Saving..." : "Save Changes"}
              </button>

            </form>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}