import "./Automobiles.css";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import LeftSection from "../components/Sections/VehiclesPage/LeftSection";
import RightSection from "../components/Sections/VehiclesPage/RightSection";
import BackToHomeVehicles from "../components/Sections/VehiclesPage/BackToHome";

import { useState } from "react";

const Vehicles = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedGear, setSelectedGear] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  return (
    <div>
      <Header />
      <BackToHomeVehicles />
      <div className="MainSection">
        <LeftSection
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          selectedFuel={selectedFuel}
          setSelectedFuel={setSelectedFuel}
          selectedGear={selectedGear}
          setSelectedGear={setSelectedGear}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
        />
        <RightSection
          selectedBrand={selectedBrand}
          selectedModel={selectedModel}
          selectedFuel={selectedFuel}
          selectedGear={selectedGear}
          selectedYear={selectedYear}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Vehicles;
