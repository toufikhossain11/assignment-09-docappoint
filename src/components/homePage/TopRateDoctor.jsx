
import DoctorCard from "../DoctorCard";


const TopRateDoctor = async () => {
    const  res = await fetch('http://localhost:5000/datas');
    const data = await res.json();
    console.log(data);
    return (
        <div className='max-w-7xl mx-auto py-5 px-4'>
            <div className='flex items-center flex-col gap-3'>
                <h1 className='font-bold text-4xl text-center text-cyan-300'>Top Rated Doctor</h1>
                <div className="w-30 h-0.5 bg-sky-500 " />
            </div>
            <div className="pt-13 space-y-5 lg:space-y-0 flex-col-1 md:flex-2 mx-15 lg:mx-0  lg:flex items-center justify-center gap-7 ">
              {data.map((doctor) => (
                <DoctorCard key={doctor._id} doctor={doctor} />
              ))}
            </div>
        </div>
    );
};

export default TopRateDoctor;