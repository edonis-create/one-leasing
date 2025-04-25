import "./Section-2.css";
import { ReactComponent as CoinsIcon } from "../../../svgs/coins.svg";
import { ReactComponent as SteeringWheelIcon } from "../../../svgs/steering wheel.svg";

const ServicesSection = () => {
  return (
    <section className="services-section">
      <h3>Услуги на One Leasing</h3>
      <p className="leasing-description">
        One Leasing ви носи бескрајни можности за купување автомобил на лизинг
        според вашите потреби!
      </p>
      <div className="leasing">
        <div>
          <div className="leasing-div">
            <h3>Lizing</h3>
            <p>
              Финансирање за сите видови автомобили. Плаќање на месечни рати до
              72 месеци
            </p>
          </div>
          <div className="leasing-icon-container">
            <SteeringWheelIcon />
          </div>
        </div>
        <div className="image-container">
          <img src="assets/images/1.webp" alt="one leasing" />
        </div>
        <div>
          <div className="leasing-icon-container">
            <CoinsIcon />
          </div>
          <div className="leasing-div">
            <h3>Leaseback</h3>
            <p>
              Добијте лизинг на вашиот сопствен автомобил. До 80% од вредноста
              на вашиот автомобил!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
