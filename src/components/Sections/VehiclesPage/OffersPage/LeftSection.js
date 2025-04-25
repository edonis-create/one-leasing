import { vehicles } from "../../../../data/data-vehicles";

const OffersLeftSection = ({
  selectedBrand,
  setSelectedBrand,
  selectedModel,
  setSelectedModel,
  selectedFuel,
  setSelectedFuel,
  selectedGear,
  setSelectedGear,
  selectedYear,
  setSelectedYear,
}) => {
  const vehicleBrands = [
    ...new Set(vehicles["vehicles"].map((vehicle) => vehicle.brand)),
  ];

  const vehicleModels = [
    ...new Set(vehicles["vehicles"].map((vehicle) => vehicle.model)),
  ];

  const vehicleYears = [
    ...new Set(vehicles["vehicles"].map((vehicle) => vehicle.year)),
  ].sort((a, b) => b - a); // newest to oldest

  const handleBrandChange = (e) => setSelectedBrand(e.target.value);
  const handleModelChange = (e) => setSelectedModel(e.target.value);
  const handleGearChange = (e) => setSelectedGear(e.target.value);

  const handleFuelChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedFuel((prev) => [...prev, value]);
    } else {
      setSelectedFuel((prev) => prev.filter((fuel) => fuel !== value));
    }
  };

  const handleYearChange = (e) => setSelectedYear(e.target.value);

  const handleReset = () => {
    setSelectedBrand("");
    setSelectedModel("");
    setSelectedFuel([]);
    setSelectedGear("");
    setSelectedYear("");
  };

  return (
    <div className="left-container">
      <button className="resetBtn" onClick={handleReset}>
        RESET
      </button>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Бренд</h4>
        </div>
        <div className="select-div">
          <select value={selectedBrand} onChange={handleBrandChange}>
            <option value="">Сите</option>
            {vehicleBrands.map((brand, index) => (
              <option key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Модел</h4>
        </div>
        <div className="select-div">
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Сите</option>
            {vehicleModels.map((model, index) => (
              <option key={index} value={model}>
                {model}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Менувач</h4>
        </div>
        <div className="select-div">
          <ul>
            <li>
              <input
                type="radio"
                id="gear1"
                name="gear"
                value="Автоматски"
                checked={selectedGear === "Автоматски"}
                onChange={handleGearChange}
              />
              <label htmlFor="gear1" className="radio-label">
                Автоматски
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="gear2"
                name="gear"
                value="Рачен"
                checked={selectedGear === "Рачен"}
                onChange={handleGearChange}
              />
              <label htmlFor="gear2" className="radio-label">
                Рачен
              </label>
            </li>
            <li>
              <input
                type="radio"
                id="gear3"
                name="gear"
                value="Полуавтоматски"
                checked={selectedGear === "Полуавтоматски"}
                onChange={handleGearChange}
              />
              <label htmlFor="gear3" className="radio-label">
                Полуавтоматски
              </label>
            </li>
          </ul>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Гориво</h4>
        </div>
        <div className="select-div checkbox-div">
          <ul>
            {["Бензин-плин", "Дизел", "Електрични", "Бензин", "Хибрид"].map(
              (fuel, index) => (
                <li key={index}>
                  <input
                    type="checkbox"
                    id={`fuel${index}`}
                    value={fuel}
                    checked={selectedFuel.includes(fuel)}
                    onChange={handleFuelChange}
                  />
                  <label htmlFor={`fuel${index}`} className="radio-label">
                    {fuel}
                  </label>
                </li>
              )
            )}
          </ul>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Година</h4>
        </div>
        <div className="select-div">
          <select value={selectedYear} onChange={handleYearChange}>
            <option value="">Сите</option>
            {vehicleYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>Цена (€)</h4>
        </div>
        <div className="select-div">
          <ul>
            <li>
              <input placeholder="Од" type="number" min="0" step="1" />
            </li>
            <li>
              <input placeholder="До" type="number" min="0" step="1" />
            </li>
          </ul>
        </div>
      </div>

      <div className="Cars-left">
        <div className="h4-div">
          <h4>детално пребарување</h4>
        </div>
      </div>
    </div>
  );
};

export default OffersLeftSection;
