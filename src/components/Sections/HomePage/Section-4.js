import "./Section-4.css";

const StatsSection = () => {
  return (
    <section className="stats-section-container">
      <div className="inner-container">
        <div>
          <img src="/assets/icons/car.png" alt="icon of a car" />
          <h2>200+</h2>
          <p>Вкупно возила</p>
        </div>
        <div>
          <img
            src="/assets/icons/personal-security.png"
            alt="personal security icon"
          />
          <h2>8+</h2>
          <p>Овластени дилери</p>
        </div>
        <div>
          <img src="/assets/icons/car-insurance.png" alt="car insurance icon" />
          <h2>856+</h2>
          <p>Продадени авотомобили</p>
        </div>
        <div>
          <img src="/assets/icons/car-key.png" alt="car-key-icon" />
          <h2>32+</h2>
          <p>Специјална понуда</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
