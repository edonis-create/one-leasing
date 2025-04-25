import { useEffect, useState } from "react";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import WhyOneLeasing, {
  Offers,
} from "../components/Sections/HomePage/Section-1";
import Services from "../components/Sections/HomePage/Section-2";
import BuyOrLoan from "../components/Sections/HomePage/Section-3";
import StatsSection from "../components/Sections/HomePage/Section-4";
import TopBrandsSection from "../components/Sections/HomePage/Section-5";
import Financing from "../components/Sections/HomePage/Section-6";
import LatestVehicles from "../components/Sections/HomePage/Section-7";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const toggleForm = () => {
    console.log("toggling");
    setIsVisible((prev) => !prev);
  };
  return (
    <div>
      <Header />
      <Offers />
      <WhyOneLeasing />
      <Services />
      <BuyOrLoan />
      <StatsSection />
      <TopBrandsSection />
      <Financing isVisible={isVisible} toggleForm={toggleForm} />
      <LatestVehicles />
      <Footer />
    </div>
  );
};

export default Home;
