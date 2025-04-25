import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import TermsOfUse_1 from "../components/Sections/TermsOfUsePage/TermsOfUse";

const TermsOfUse = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage={"Услови за користење"} />
      <TermsOfUse_1 />
      <Footer />
    </div>
  );
};

export default TermsOfUse;
