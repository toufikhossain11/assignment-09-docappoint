import DoctorCard from '@/components/DoctorCard';
import { Button, Input } from '@heroui/react';
import { Search } from 'lucide-react';
import React from 'react';

const allAppointPage = () => {
    return (
        <div className='mx-auto max-w-6xl py-6 '>
             <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center '>All Doctors</h1>
                <div className="w-25 h-0.5 bg-sky-500 " />
            </div>
                <div className="my-10  flex justify-left ">
                    <div className="flex w-full max-w-2xl items-center gap-4">

                        {/* Search Input */}
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
                                    "text-white placeholder:text-slate-500 ",
                                inputWrapper:
                                    `
              h-14
              border
              border-cyan-400/30
              bg-[#111827]/70
              backdrop-blur-xl
              hover:border-cyan-400/40
              focus-within:border-cyan-400/40
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
                <DoctorCard/>
            </div>
        </div>
    );
};

export default allAppointPage;