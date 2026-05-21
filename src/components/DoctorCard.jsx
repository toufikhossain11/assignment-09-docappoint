"use client";

import Image from "next/image";
import Link from "next/link";
import { MapPin, BriefcaseMedical, Star } from "lucide-react";
import { Card, CardFooter } from "@heroui/react";

const DoctorCard = ({ doctor }) => {

    return (
        <Card
            className="
                group w-80 rounded-2xl
                border
                border-white/10
                bg-[#111827]/70
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-2xl
                hover:shadow-cyan-500/10
            "
            radius="lg"
            shadow="none"
        >
            {/* Doctor Image */}
            <div className="overflow-hidden p-0">
                <div className="relative h-[180px] w-full overflow-hidden">
                    <Image
                        src={doctor.image}
                        alt="Doctor Image"
                        fill
                        className="object-cover transition-all duration-700 group-hover:scale-110 rounded-2xl"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

                    {/* Top Rated Badge */}
                    <div className="absolute left-3 top-3 flex items-center gap-1 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-2.5 py-1 backdrop-blur-xl">
                        <Star size={12} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-xs font-medium text-yellow-300">
                            {doctor.rating} / 5
                        </span>
                    </div>

                    {/* Specialty Badge */}
                    <div className="absolute bottom-3 left-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-2.5 py-1 backdrop-blur-xl">
                        <p className="text-xs font-medium text-cyan-300">
                            {doctor.specialty}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="space-y-3 p-4">
                    {/* Doctor Name */}
                    <div>
                        <h2 className="text-base font-bold text-white">
                            {doctor.name}
                        </h2>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                            {doctor.description}
                        </p>
                    </div>

                    {/* Info */}
                    <div className="space-y-2">
                        {/* Experience */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                                <BriefcaseMedical size={15} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Experience</p>
                                <h4 className="text-sm font-semibold text-white">{doctor.experience} years </h4>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                                <MapPin size={15} />
                            </div>
                            <div>
                                <p className="text-xs text-slate-400">Hospital</p>
                                <h4 className="text-sm font-semibold text-white">
                                    {doctor.hospital}
                                </h4>
                                <p className="text-xs text-slate-500">{doctor.location}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <CardFooter className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                {/* Fee */}
                <div>
                    <p className="text-xs text-slate-400">Appointment Fee</p>
                    <h2 className="text-lg font-bold text-cyan-300">৳ {doctor.fee}</h2>
                </div>

                {/* Button */}
                <Link href={`/allAppointments/${doctor._id}`}>
                    <button
                        className="
                            rounded-xl
                            bg-gradient-to-r
                            from-[#2563EB]
                            to-[#06B6D4]
                            px-4
                            py-2
                            text-sm
                            font-semibold
                            text-white
                            shadow-lg
                            shadow-cyan-500/20
                            transition-all
                            duration-300
                            hover:scale-105
                        "
                    >
                        View Details
                    </button>
                </Link>
            </CardFooter>
        </Card>
    );
};

export default DoctorCard;