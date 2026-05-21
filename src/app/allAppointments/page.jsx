import DoctorCard from '@/components/DoctorCard';
import { Button, Input } from '@heroui/react';
import { Search } from 'lucide-react';
import React from 'react';

const allAppointPage = async () => {
    const res = await fetch('http://localhost:5000/allAppointments');
    const data = await res.json();

    return (
        <div className='mx-auto max-w-6xl py-6 '>
            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center '>All Doctors</h1>
                <div className="w-25 h-0.5 bg-sky-500 " />
            </div>
            <div className='flex flex-1 justify-between items-center my-10'>
                <div className="  flex justify-left mx-auto lg:mx-0">
                    <div className="flex w-full max-w-2xl items-center gap-4">
                        <Input
                            type="text"
                            placeholder="Search doctor by name..."
                            //   value={searchText}
                            //   onChange={(e) => setSearchText(e.target.value)}
                            startContent={
                                <Search
                                    size={18}
                                    className="text-cyan-300 "
                                />
                            }
                            radius="full"
                            variant="bordered"
                            classNames={{
                                input:
                                    "text-white placeholder:text-slate-500",

                                inputWrapper:
                                    `
      h-14
      border
      border-white/10
      bg-[#111827]/70
      backdrop-blur-xl
      hover:border-cyan-400
      focus-within:border-cyan-400
      transition-all
      duration-300
    `,
                            }}
                        />
                        <Button
                            radius="full"
                            className="
            h-8
            rounded-2xl
            bg-gradient-to-r
            from-[#2563EB]
            to-[#06B6D4]
            px-6
            text-base
            font-semibold
            text-white
            shadow-lg
            shadow-cyan-500/20
            transition-all
            duration-300
            hover:scale-105
          "
                        >
                            Search
                        </Button>
                    </div>
                </div>
                <div>
                    {/* <h1 className='sm:hidden text-lg font-semibold'>Total Doctors: 10</h1> */}
                    <h1 className='hidden sm:block text-lg font-semibold'>Total Doctors: {data.length}</h1>
                </div>
            </div>

            <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((doctor) => (
                    <DoctorCard key={doctor.id} doctor={doctor} />
                ))}
            </div>
        </div>
    );
};

export default allAppointPage;