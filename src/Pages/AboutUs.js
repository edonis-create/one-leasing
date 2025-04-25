import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Bio from "../components/Sections/AboutUsPage/Section-1";
import LeasingOffers from "../components/Sections/AboutUsPage/Section-2";
import BackToHome from "../components/Sections/BackToHome";
import StatsSection from "../components/Sections/HomePage/Section-4";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage={"За нас"} />
      <Bio />
      <LeasingOffers />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
