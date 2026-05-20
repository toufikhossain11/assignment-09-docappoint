"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
  {
    id: 1,
    image: "/hospital.jpg",
  },
  {
    id: 2,
    image: "/patient-care.webp",
  },
  {
    id: 3,
    image: "/doctors-team.jpeg",
  },
];

export default function Hero() {
  return (
    <div>
    <section className="relative h-screen  min-h-[400px] w-full overflow-hidden">
      {/* Background Slider */}
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="h-[550px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-screen w-full">
              <Image
                src={slide.image}
                alt="Medical Banner"
                fill
                priority
                className="object-cover scale-110 animate-slowZoom"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/70 to-[#020617]/40" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Hero Content */}
      <div className="absolute inset-0 z-20  flex items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2 lg:px-8">
          
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-cyan-400" />
              <p className="text-sm font-medium text-cyan-300">
                Trusted Medical Platform
              </p>
            </div>

            <h1 className="mb-6 text-4xl font-extrabold leading-tight text-white md:text-5xl">
              Find Your
              <span className="bg-gradient-to-r from-[#38BDF8] to-[#06B6D4] bg-clip-text text-transparent">
                {" "}
                Trusted Doctor
              </span>
              <br />
              Anytime Anywhere
            </h1>

            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Book appointments with experienced doctors and specialists
              quickly, securely, and easily from anywhere.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">
              <button className="rounded-2xl bg-gradient-to-r from-[#2563EB] to-[#06B6D4] px-8 py-4 text-lg font-semibold text-white shadow-2xl shadow-cyan-500/20 transition-all duration-300 hover:scale-105">
                Book Appointment
              </button>

              <button className="rounded-2xl border border-cyan-400/30 px-8 py-4 font-semibold text-lg text-cyan-300 transition-all duration-300 hover:bg-cyan-400 hover:text-black">
                Explore Doctors
              </button>
            </div>
            
          </div>
        </div>
      </div>
    </section>
     <div className="mb-9 grid grid-cols-3 gap-6 mx-4 lg:mx-auto lg:w-[1000px]  text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-300">500+</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Expert Doctors
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-300">24/7</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Emergency Care
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
                <h2 className="text-3xl font-bold text-cyan-300">10K+</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Happy Patients
                </p>
              </div>
            </div>

    </div>
  );
}