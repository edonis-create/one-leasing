import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import PriceListSection from "../components/Sections/PriceListPage/Section";

const PriceList = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage="Ценовник" />
      <PriceListSection />
      <Footer />
    </div>
  );
};

export default PriceList;
