import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHome from "../components/Sections/BackToHome";
import CertificateSection from "../components/Sections/CertificatesPage/Section";

const CertificateAndDocuments = () => {
  return (
    <div>
      <Header />
      <BackToHome currentPage="Документи и сертификати" />
      <CertificateSection />
      <Footer />
    </div>
  );
};

export default CertificateAndDocuments;
