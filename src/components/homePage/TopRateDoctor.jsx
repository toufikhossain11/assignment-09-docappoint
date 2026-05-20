
import DoctorCard from "../DoctorCard";


const TopRateDoctor = () => {
    return (
        <div className='max-w-7xl mx-auto py-5 px-4'>
            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center '>Top Rated Doctor</h1>
                <div className="w-30 h-0.5 bg-sky-500 " />
            </div>
            <div className="pt-15">
            <DoctorCard />
            </div>
        </div>
    );
};

export default TopRateDoctor;