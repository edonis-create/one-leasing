import "./Section-7.css";
import { ReactComponent as MapPin } from "../../../svgs/map-marker.svg";
import { ReactComponent as SpeedometerIcon } from "../../../svgs/speedometer-svgrepo-com.svg";
import { ReactComponent as GearShiftIcon } from "../../../svgs/gear-shift.svg";
import { ReactComponent as EngineIcon } from "../../../svgs/engine-motor-svgrepo-com.svg";
import { ReactComponent as RefreshIcon } from "../../../svgs/refresh.svg";
import { ReactComponent as FuelIcon } from "../../../svgs/fuel-pump-svgrepo-com.svg";
import { ReactComponent as ArrowRight } from "../../../svgs/keyboard_arrow_right.svg";
import { ReactComponent as ArrowLeft } from "../../../svgs/keyboard_arrow_left.svg";
import { Link } from "react-router-dom";

import { vehicles } from "../../../data/data-vehicles";
import { useState } from "react";

const LatestVehicles = () => {
  const [startIndex, setStartIndex] = useState(0);
  const totalVehicles = vehicles["vehicles"].length;

  const visibleVehicles = [
    vehicles["vehicles"][startIndex % totalVehicles],
    vehicles["vehicles"][(startIndex + 1) % totalVehicles],
    vehicles["vehicles"][(startIndex + 2) % totalVehicles],
  ];

  const handleNext = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % totalVehicles);
  };

  const handlePrev = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 1 + totalVehicles) % totalVehicles
    );
  };

  return (
    <section className="latest-section">
      <h2>Најнови возила</h2>
      <div className="black-line"></div>
      <div className="black-line2"></div>
      <div className="vehicles-for-sale">
        <button onClick={handlePrev} className="arrow-left">
          <ArrowLeft />
        </button>
        <button onClick={handleNext} className="arrow-right">
          <ArrowRight />
        </button>
        <div className="vehicles-for-sale">
          {visibleVehicles.map((vehicle, index) => (
            <div className="vehicle" key={index}>
              <img
                src={vehicle.img}
                alt={`${vehicle.brand} ${vehicle.model}`}
              />
              <div>
                <h5>
                  {vehicle.brand} {vehicle.model}
                </h5>
                <p>
                  <MapPin /> {vehicle.location}
                </p>
                <span className="price">
                  {vehicle.payment.discountedPrice
                    ? vehicle.payment.discountedPrice
                    : vehicle.payment.price}
                  €
                </span>
                <span>Од {vehicle.payment.monthly} €/month</span>
              </div>
              <div className="stats">
                <p>
                  <FuelIcon /> Дизел
                </p>
                <p>
                  <SpeedometerIcon /> {vehicle.distance} km
                </p>
                <p>
                  <GearShiftIcon /> {vehicle.gear}
                </p>
                <p>
                  <EngineIcon /> {vehicle.litreCapacity}cc
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link to="/avtomobili">
        <button>
          Види сè <RefreshIcon />
        </button>
      </Link>
    </section>
  );
};

export default LatestVehicles;
