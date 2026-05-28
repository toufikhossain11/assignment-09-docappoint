"use client";

import Image from "next/image";
import {
  Clock3,
  GraduationCap,
  MapPin,
  Building2,
  BadgeDollarSign,
  Star,
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { BookingDialog } from "./BookingDiolog";
// import { date } from "better-auth";

const DoctorDetailsPage = ({ doctor }) => {

   const { data: session } = authClient.useSession()
    const user = session?.user;
  
  // const handleBookAppointment = async () => {
  //   const bookingData = {
  //     doctorId: doctor?._id,
  //     doctorName: doctor?.name,
  //     doctorSpecialty: doctor?.specialty,
  //     doctorFee: doctor?.fee,
  //     doctorImage: doctor?.image,
  //     hospital: doctor?.hospital,
  //     date: new Date().toISOString(),
  //     userId: user?.id,
  //     userName: user?.name,
  //   };
  //   const res = await fetch("http://localhost:5000/bookings", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(bookingData),
  //   });
  //   const data = await res.json();
  //   toast.success("Appointment booked successfully!");
  // }

  const stats = [
    { value: "12K+", label: "Happy Patients" },
    { value: "98%", label: "Satisfaction Rate" },
    { value: "10+", label: "Years Experience" },
  ];

  return (
    <section className="min-h-screen bg-[#0B1120] px-4 py-10">
      <div className="mx-auto max-w-6xl space-y-5">

        {/* Top Section */}
        <div className="grid gap-5 overflow-hidden rounded-3xl border border-white/10 bg-[#111827]/70 p-5 backdrop-blur-xl lg:grid-cols-[320px_1fr]">

          {/* Doctor Image */}
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src={doctor?.image}
              alt={doctor?.name}
              width={500}
              height={500}
              className="h-full max-h-[420px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/80 via-transparent to-transparent" />

            {/* Badge */}
            <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full border border-yellow-400/20 bg-yellow-500 px-3 py-1.5 backdrop-blur-xl">
              <Star size={13} className="fill-yellow-700 text-yellow-700" />
              <span className="text-xs font-medium text-yellow-700">{doctor?.rating}/5</span>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex flex-col justify-between">

            {/* Name & Specialty */}
            <div>
              <div className="mb-2 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 backdrop-blur-xl">
                <span className="text-xs font-medium text-cyan-300">{doctor?.specialty}</span>
              </div>
              <h1 className="text-2xl font-extrabold leading-tight text-white">{doctor?.name}</h1>
              <p className="mt-2 text-xs leading-relaxed text-slate-400">{doctor?.description}</p>
            </div>

            {/* Info Grid */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { icon: <GraduationCap size={16} />, label: "Experience", value: doctor?.experience },
                { icon: <Building2 size={16} />, label: "Hospital", value: doctor?.hospital },
                { icon: <MapPin size={16} />, label: "Location", value: doctor?.location },
                { icon: <BadgeDollarSign size={16} />, label: "Fee", value: `৳ ${doctor?.fee}`, cyan: true },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <h3 className={`mt-0.5 text-sm font-semibold ${item.cyan ? "text-cyan-300" : "text-white"}`}>
                      {item.value}
                    </h3>
                  </div>
                </div>
              ))}
            </div>

            {/* Availability */}
            <div className="mt-4">
              <p className="mb-2 text-sm font-semibold text-white">Available Time</p>
              <div className="flex flex-wrap gap-2">
                {doctor?.availability?.map((time, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-1.5 rounded-xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 backdrop-blur-xl"
                  >
                    <Clock3 size={13} className="text-cyan-300" />
                    <span className="text-xs font-medium text-cyan-300">{time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-4 flex flex-wrap gap-3">
              {/* <button onClick={handleBookAppointment} className="rounded-xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                Book Appointment
              </button> */}
              <BookingDialog
  doctor={{
    name: doctor.name,
    image: doctor.image,
    specialty: doctor.specialty,
    hospital: doctor.hospital,
    fee: doctor.fee,
  }}
  userEmail={session?.user?.email}
/>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-[#111827]/70 px-5 py-4 backdrop-blur-xl">
              <h2 className="text-2xl font-bold text-cyan-300">{s.value}</h2>
              <p className="mt-1 text-xs text-slate-400">{s.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DoctorDetailsPage;