import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import CookiePolicy_1 from "../components/Sections/CookiePolicyPage/Section-1";

const CookiePolicy = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage="Политика за колачиња" />
      <CookiePolicy_1 />
      <Footer />
    </div>
  );
};

export default CookiePolicy;
