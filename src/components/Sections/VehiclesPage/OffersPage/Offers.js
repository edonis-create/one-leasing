import { useState } from "react";
import OffersLeftSection from "./LeftSection";
import OffersRightSection from "./RightSection";

const VehicleOffersPage = () => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [selectedGear, setSelectedGear] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedPriceFrom, setSelectedPriceFrom] = useState("");
  const [selectedPriceTo, setSelectedPriceTo] = useState("");
  const [selectedOffer, setSelectedOffer] = useState("");

  return (
    <div className="MainSection">
      <OffersLeftSection
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
        selectedPriceFrom={selectedPriceFrom}
        setSelectedPriceFrom={setSelectedPriceFrom}
        selectedPriceTo={selectedPriceTo}
        setSelectedPriceTo={setSelectedPriceTo}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
      />
      <OffersRightSection
        selectedBrand={selectedBrand}
        selectedModel={selectedModel}
        selectedFuel={selectedFuel}
        selectedGear={selectedGear}
        selectedYear={selectedYear}
        selectedPriceFrom={selectedPriceFrom}
        selectedPriceTo={selectedPriceTo}
        selectedOffer={selectedOffer}
        setSelectedOffer={setSelectedOffer}
      />
    </div>
  );
};

export default VehicleOffersPage;
