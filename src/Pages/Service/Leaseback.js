import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import StatsSection from "../../components/Sections/HomePage/Section-4";
import Offers4 from "../../components/Sections/LeasebackPage/Section-1";
import HowLeaseback from "../../components/Sections/LeasebackPage/Section-2";
import FinancingOptions2 from "../../components/Sections/LeasebackPage/Section-3";

const Leaseback = () => {
  return (
    <div>
      <Header />
      <Offers4 />
      <HowLeaseback />
      <FinancingOptions2 />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Leaseback;
