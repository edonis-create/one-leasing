import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StatsSection from "../../components/Sections/HomePage/Section-4";
import Offers3 from "../../components/Sections/LizingPage/Section-1";
import HowDoesItWork from "../../components/Sections/LizingPage/Section-2";
import FinancingOptions from "../../components/Sections/LizingPage/Section-3";

const Lizing = () => {
  return (
    <div>
      <Header />
      <Offers3 />
      <HowDoesItWork />
      <FinancingOptions />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Lizing;
