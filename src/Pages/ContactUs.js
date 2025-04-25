import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import FirstSection from "../components/Sections/ContactUsPage/FirstSection";
import ContactUsMap from "../components/Sections/ContactUsPage/Map";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage={"контакт"} />
      <FirstSection />
      <ContactUsMap />
      <Footer />
    </div>
  );
};

export default ContactUs;
