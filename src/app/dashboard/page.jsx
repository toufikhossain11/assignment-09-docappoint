'use client';
import Image from "next/image";
import { Card, Button, Input } from "@heroui/react";
import { FaCalendarCheck, FaEdit, FaTrash, FaUser, FaEnvelope } from "react-icons/fa";
import { useState, useEffect } from "react";
import Profile from "@/components/Profile";
import { DeleteBtn } from "@/components/DeleteBtn";


const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("bookings");
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await fetch('http://localhost:5000/bookings');
        const data = await res.json();
        setBookings(data);
      } catch (err) {
        console.error("Failed to fetch bookings:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

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
          <>
            {loading ? (
              <div className="flex items-center justify-center py-20">
                <p className="text-slate-400 text-sm animate-pulse">Loading bookings...</p>
              </div>
            ) : bookings.length === 0 ? (
              <div className="flex items-center justify-center py-20">
                <p className="text-slate-500 text-sm">No bookings found.</p>
              </div>
            ) : (
              <div className="grid gap-4 lg:grid-cols-2">
                {bookings.map((booking) => (
                  <Card
                    key={booking._id || booking.id}
                    className="rounded-2xl border border-white/10 bg-[#111827]/70 backdrop-blur-xl"
                  >
                    <div className="p-4">
                      <div className="flex gap-4">

                        {/* Doctor Image */}
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                          <Image
                            src={booking.doctorImage || "/doctor.jpg"}
                            alt="doctor"
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h2 className="text-base font-bold text-white">
                                {booking.doctorName || "Unknown Doctor"}
                              </h2>
                              <p className="text-xs text-cyan-300">
                                {booking.doctorSpecialty || "Specialist"}
                              </p>
                            </div>
                            <span className="shrink-0 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-xs text-cyan-300">
                              {booking.status || "Confirmed"}
                            </span>
                          </div>

                          {/* Info */}
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center gap-2 text-slate-300">
                              <FaCalendarCheck size={12} className="text-cyan-300" />
                              <p className="text-xs">
                                {booking.date || "N/A"} — {booking.time || ""}
                              </p>
                            </div>
                            <p className="text-xs text-slate-400">
                              Hospital: {booking.hospital || "N/A"}
                            </p>
                            <p className="text-xs text-slate-400">
                              Patient: {booking.patientName || "N/A"}
                            </p>
                          </div>

                          {/* Buttons */}
                          <div className="mt-3 flex gap-2">
                            <Button
                              size="sm"
                              radius="lg"
                              className="rounded-xl bg-[#2563EB] px-2 text-[14px] text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105"
                              startContent={<FaEdit size={11} />}
                            >
                              Update
                            </Button>
                            <DeleteBtn bookingId={booking._id} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}

        {/* ── MY PROFILE ── */}
        {activeTab === "profile" && (
          <Profile />
          
        )}

      </div>
    </section>
  );
};

export default DashboardPage;