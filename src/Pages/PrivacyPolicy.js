import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import Section1 from "../components/Sections/PrivacyPolicySection/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage="Политика за приватност" />
      <Section1 />
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
