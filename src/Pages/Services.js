import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import Section1 from "../components/Sections/ServicesPage/Section-1";
import Why_One_Leasing from "../components/Sections/ServicesPage/Section-2";
import Why_One_Leasing2 from "../components/Sections/ServicesPage/Section-3";

const Services = () => {
  return (
    <>
      <Header />
      <BackToHome currentPage={"Услуги"} />
      <Section1 />
      <Why_One_Leasing />
      <Why_One_Leasing2 />
      <Footer />
    </>
  );
};

export default Services;
