import DoctorDetailsPage from "@/components/DoctorDetailsPage";
import AboutUs from "@/components/homePage/AboutUs";
import Hero from "@/components/homePage/Hero";
import TopRateDoctor from "@/components/homePage/TopRateDoctor";

const page = () => {
  return (
    <div>
        <Hero />
       <TopRateDoctor />
       <AboutUs/>
       <DoctorDetailsPage/>
    </div>
  );
};

export default page;