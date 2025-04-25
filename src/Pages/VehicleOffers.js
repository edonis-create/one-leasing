import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import BackToHomeVehicles from "../components/Sections/VehiclesPage/BackToHome";
import VehicleOffersPage from "../components/Sections/VehiclesPage/OffersPage/Offers";

const VehicleOffers = () => {
  return (
    <div>
      <Header />
      <BackToHomeVehicles />
      <VehicleOffersPage />
      <Footer />
    </div>
  );
};

export default VehicleOffers;
