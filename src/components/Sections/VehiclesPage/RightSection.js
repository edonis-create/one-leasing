import "./RightSection.css";
import { ReactComponent as MapPin } from "../../../svgs/map-marker.svg";
import { ReactComponent as SpeedometerIcon } from "../../../svgs/speedometer-svgrepo-com.svg";
import { ReactComponent as GearShiftIcon } from "../../../svgs/gear-shift.svg";
import { ReactComponent as EngineIcon } from "../../../svgs/engine-motor-svgrepo-com.svg";
import { ReactComponent as FuelIcon } from "../../../svgs/fuel-2-svgrepo-com.svg";
import { ReactComponent as Calendar } from "../../../svgs/calendar-svgrepo-com.svg";

import { vehicles } from "../../../data/data-vehicles";
import { Link } from "react-router-dom";

const RightSection = ({
  selectedBrand,
  selectedModel,
  selectedFuel,
  selectedGear,
  selectedYear,
}) => {
  const filteredVehicles = vehicles["vehicles"].filter((vehicle) => {
    let matches = true;

    if (selectedBrand && vehicle.brand !== selectedBrand) matches = false;
    if (selectedModel && vehicle.model !== selectedModel) matches = false;
    if (selectedFuel.length > 0 && !selectedFuel.includes(vehicle.fuel))
      matches = false;
    if (selectedGear && vehicle.gear !== selectedGear) matches = false;
    if (selectedYear && vehicle.year !== parseInt(selectedYear))
      matches = false;

    return matches;
  });

  return (
    <div className="vehicles-right-section">
      <div className="list-view">
        <p>List View</p>
      </div>
      <div className="upp-right">
        <div className="upp-right-left">
          <ul>
            <span>
              <li>Сите ({filteredVehicles.length})</li>
            </span>
            <Link to="/avtomobili-offer-yes">
              <li className="offer-item">Понуда</li>
            </Link>
          </ul>
        </div>
        <div className="upp-right-right">
          <h6>Сортирај :</h6>
          <select id="sort" name="sort">
            <option value="">Датум ↑</option>
            <option value="">Датум ↓</option>
            <option value="">Цена ↑</option>
            <option value="">Цена ↓</option>
          </select>
        </div>
      </div>

      <div className="vehicles-for-sale_list">
        {filteredVehicles.length === 0 ? (
          <p>No vehicles found for the selected year</p>
        ) : (
          filteredVehicles.map((vehicle, index) => (
            <div className="vehicle" key={index}>
              <img src={vehicle.img} alt={vehicle.model} />
              <div className="upper-grid">
                <div>
                  <h5>{vehicle.brand}</h5>
                  <h5 className="price">
                    Од <span>{vehicle.payment.monthly}</span> €/month
                  </h5>
                  <h5>{vehicle.model}</h5>
                  <h5 className="price">
                    <span>{vehicle.payment.price}€</span>
                  </h5>
                </div>
                <p>
                  <MapPin /> {vehicle.location}
                </p>
              </div>
              <div className="stats">
                <p>
                  <FuelIcon /> {vehicle.fuel}
                </p>
                <p>
                  <SpeedometerIcon /> {vehicle.distance} km
                </p>
                <p>
                  <GearShiftIcon /> {vehicle.gear}
                </p>
                <p>
                  <EngineIcon /> {vehicle.litreCapacity} cc
                </p>
                <p>
                  <Calendar /> {vehicle.year}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RightSection;
