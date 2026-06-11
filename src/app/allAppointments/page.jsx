import DoctorCard from '@/components/DoctorCard';
import { Button, Input } from '@heroui/react';
import { Search } from 'lucide-react';


const allAppointPage = async () => {
    const res = await fetch('http://localhost:5000/allAppointments');
    const data = await res.json();
    console.log('all data',data);
    return (
        <div className='mx-auto max-w-6xl py-6 '>
            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center text-cyan-300'>All Doctors</h1>
                <div className="w-25 h-0.5 bg-sky-500 " />
            </div>
            <div className='flex flex-1 justify-between items-center my-10'>
                <div className="  flex justify-left mx-auto lg:mx-0">
                    <div className="flex w-full max-w-2xl items-center gap-4">
                       <Input
  placeholder="Search doctor by name..."
  radius="full"
  variant="bordered"
  classNames={{
    input: "text-white",
    inputWrapper:
      "h-14 bg-[#111827] border-2 border-cyan-400",
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
                    <h1 className='hidden sm:block text-lg font-semibold text-white'>Total Doctors: {data.length}</h1>
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