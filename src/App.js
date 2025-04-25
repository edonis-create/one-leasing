import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PriceList from "./Pages/PriceList";
import CertificateAndDocuments from "./Pages/CertificateAndDocuments";
import Services from "./Pages/Services";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import Faqs from "./Pages/FAQs/Faqs";
import Lizing from "./Pages/Service/Lizing";
import ContactUs from "./Pages/ContactUs";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CookiePolicy from "./Pages/CookiePolicy";
import TermsOfUse from "./Pages/TermsOfUse";
import Leaseback from "./Pages/Service/Leaseback";
import ScrollToTop from "./hooks/ScrollToTop";
import Vehicles from "./Pages/Automobiles";
import VehicleOffers from "./Pages/VehicleOffers";
import FaqsLeaseback from "./Pages/FAQs/Faqs-leaseback";
import FaqsAutolizing from "./Pages/FAQs/Faqs-autolizing";

function App() {
  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="/faqs/Leaseback" element={<FaqsLeaseback />} />
          <Route path="/faqs/Autolizing" element={<FaqsAutolizing />} />
          <Route path="/posts" element={<Blog />} />
          <Route path="/avtomobili" element={<Vehicles />} />
          <Route path="/avtomobili-offer-yes" element={<VehicleOffers />} />
          <Route path="/uslugi" element={<Services />} />
          <Route path="/service/lizing" element={<Lizing />} />
          <Route path="/service/leaseback" element={<Leaseback />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/cookies-policy" element={<CookiePolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/Ценовник" element={<PriceList />} />
          <Route
            path="/certificate-and-documents"
            element={<CertificateAndDocuments />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
