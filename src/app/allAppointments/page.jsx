'use client';

import DoctorCard from '@/components/DoctorCard';
import { Button, Input } from '@heroui/react';
import { useState, useEffect } from 'react';


const AllAppointPage = () => {
    const [doctors, setDoctors] = useState([]);
    const [searchText, setSearchText] = useState('');
    // const [loading, setLoading] = useState(false);

   const fetchDoctors = async (query = '') => {
   
   
        const url = query
            ? `${process.env.NEXT_PUBLIC_SERVER_URL}/allAppointments?search=${encodeURIComponent(query)}`
            : `${process.env.NEXT_PUBLIC_SERVER_URL}/allAppointments`;
        const res = await fetch(url, { cache: 'no-store' });
        const data = await res.json();
        setDoctors(data);
   
};

    useEffect(() => {
    const loadDoctors = async () => {
      
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/allAppointments`, { cache: 'no-store', method: 'GET' });
            const data = await res.json();
            setDoctors(data);
     
    };

    loadDoctors();
}, []);

    const handleSearch = () => {
        fetchDoctors(searchText);
    };

    // Enter key press এ search
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleSearch();
    };

    return (
        <div className='mx-auto max-w-6xl py-6'>
            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center text-cyan-300'>All Doctors</h1>
                <div className="w-25 h-0.5 bg-sky-500" />
            </div>

            <div className='flex flex-1 justify-between items-center my-10'>
                <div className="flex justify-left mx-auto lg:mx-0">
                    <div className="flex w-full max-w-2xl items-center gap-4">
                        <input
                            type="text"
                            placeholder="Search doctor by name..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            onKeyDown={handleKeyDown}
                            className="
                                h-14 w-full px-5
                                rounded-full
                                bg-[#111827]
                                border-2 border-cyan-400
                                text-white
                                placeholder-gray-400
                                outline-none
                                focus:border-cyan-300
                                transition-colors
                            "
                        />
                        <button
                            onClick={handleSearch}
                            className="
                                h-11 px-6
                                rounded-2xl
                                bg-gradient-to-r from-[#2563EB] to-[#06B6D4]
                                text-base font-semibold text-white
                                shadow-lg shadow-cyan-500/20
                                transition-all duration-300
                                hover:scale-105
                                whitespace-nowrap
                            "
                        >
                            Search
                        </button>
                    </div>
                </div>

                <div>
                    <h1 className='hidden sm:block text-lg font-semibold text-white'>
                        Total Doctors: {doctors.length}
                    </h1>
                </div>
            </div>

            
                <div className="mx-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map((doctor) => (
                        <DoctorCard key={doctor._id} doctor={doctor} />
                    ))}
                </div>
            
        </div>
    );
};

export default AllAppointPage;