import Image from "next/image";
import { ShieldCheck, Stethoscope, HeartPulse, Users, Building2, FlaskConical, Trophy } from "lucide-react";

const features = [
    {
        icon: <ShieldCheck size={22} />,
        title: "Trusted & Certified Care",
        desc: "Our doctors are board-certified specialists with years of hands-on clinical experience.",
    },
    {
        icon: <Stethoscope size={22} />,
        title: "Advanced Medical Facilities",
        desc: "Equipped with modern diagnostic tools and treatment systems for accurate results.",
    },
    {
        icon: <HeartPulse size={22} />,
        title: "Patient-First Approach",
        desc: "We prioritize your comfort and well-being at every step of your health journey.",
    },
];

const stats = [
    { icon: <Users size={26} />, value: "85+", label: "Doctors" },
    { icon: <Building2 size={26} />, value: "18", label: "Departments" },
    { icon: <FlaskConical size={26} />, value: "12", label: "Research Labs" },
    { icon: <Trophy size={26} />, value: "150", label: "Awards" },
];

const AboutUs = () => {
    return (
        <section className='max-w-7xl mx-auto py-2'>

            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center text-cyan-300'>About Us</h1>
                <div className="w-25 h-0.5 bg-sky-500 " />
            </div>

            <div className="mx-auto max-w-6xl px-4 py-16">
                <div className="grid grid-cols-1 items-center justify-center  gap-12 lg:grid-cols-2">

                    {/* Left – Image */}
                    <div className="relative ">
                        {/* Blue accent border behind image */}
                        <div className="absolute -left-3 -top-3 h-full w-full rounded-2xl border-2 border-blue-200 " />

                        <div className="relative -left-3 -top-3 overflow-hidden rounded-2xl shadow-lg">
                            <Image
                                src="/doctors-team.jpeg"
                                alt="Our Medical Team"
                                width={560}
                                height={400}
                                className="h-[470px] w-full object-cover"
                            />

                            {/* Play Button */}
                            <button className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-cyan-500 shadow-xl transition-all duration-300 hover:scale-110 hover:bg-cyan-700">
                                <svg
                                    className="ml-1 text-white"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </button>

                            {/* Experience Badge */}
                            <div className="absolute bottom-4 right-4 rounded-xl bg-cyan-500 px-4 py-2 text-center text-white shadow-lg">
                                <p className="text-2xl font-bold">10+</p>
                                <p className="text-xs">Years of Trust</p>
                            </div>
                        </div>
                    </div>

                    {/* Right – Content */}
                    <div className="space-y-6">
                        {/* Badge */}
                        <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-xl">
                        <p className="text-sm font-medium text-cyan-300">Who We Are</p>
                                
                        </span>

                        <h2 className="text-4xl font-bold leading-snug text-white ">
                            Providing Quality Healthcare <br />
                            <span className="text-cyan-300">You Can Rely On</span>
                        </h2>

                        <p className="text-sm leading-relaxed text-gray-500">
                            We are committed to delivering compassionate, world-class medical
                            care to every patient. Our experienced team works tirelessly to
                            ensure the best outcomes through innovation and dedication.
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                            {features.map((item, i) => (
                                <div key={i} className="flex items-start gap-4">
                                    {/* Icon Box */}
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-white shadow-md shadow-blue-500">
                                        {item.icon}
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-white">{item.title}</h4>
                                        <p className="mt-0.5 text-sm text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className=" py-8">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-4">
                        {stats.map((item, i) => (
                            <div
                                key={i}
                                className="flex flex-col items-center gap-4 rounded-2xl  border border-white/10 bg-white/5 p-5 backdrop-blur-xl  text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-white shadow-md shadow-blue-200">
                                    {item.icon}
                                </div>
                                <p className="text-3xl font-bold text-white">{item.value}</p>
                                <p className="text-sm text-gray-500">{item.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default AboutUs;