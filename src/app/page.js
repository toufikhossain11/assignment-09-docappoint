import DoctorDetailsPage from "@/components/DoctorDetailsPage";
import AboutUs from "@/components/homePage/AboutUs";
import Hero from "@/components/homePage/Hero";
import TopRateDoctor from "@/components/homePage/TopRateDoctor";
export const metadata = {
  title: "Home | DocAppoint",
  description: "Book appointments with trusted doctors online.",
};

const page = () => {
  return (
    <div>
        <Hero />
       <TopRateDoctor />
       <AboutUs/>
       
    </div>
  );
};

export default page;