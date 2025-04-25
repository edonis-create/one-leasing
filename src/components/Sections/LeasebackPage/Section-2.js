import { Link } from "react-router-dom";
import "./Section-2.css";

const HowLeaseback = () => {
  return (
    <section className="how-leaseback">
      <div className="upper-div">
        <h2>Како работи</h2>
        <div className="black-line"></div>
        <div className="black-line2"></div>
        <div className="lower-div">
          <div>
            <div className="leaseback-icon-container2">
              <img src="/assets/icons/car-green.png" alt="cars background" />
            </div>
            <p>твојот автомобил</p>
          </div>
          <div>
            <div className="leaseback-icon-container2 mg-b">
              <img
                src="/assets/icons/money-bag-green.png"
                alt="moneybag icon"
              />
            </div>
            <p>Ние финансираме до 85% од вредноста на вашиот автомобил</p>
          </div>
          <div>
            <div className="leaseback-icon-container2">
              <img src="/assets/icons/calendar-green.png" alt="calendar icon" />
            </div>
            <p>Поставете рата и рок на достасување</p>
          </div>
          <div>
            <div className="leaseback-icon-container2">
              <img src="/assets/icons/loan-green.png" alt="loan icon" />
            </div>
            <p>потпише договор</p>
          </div>
          <div>
            <div className="leaseback-icon-container2">
              <img src="/assets/icons/wallet-green.png" alt="wallet icon" />
            </div>
            <p>
              Земете ги вашите пари и продолжете да го возите истиот автомобил
            </p>
          </div>
        </div>
        <Link to="/avtomobili">
          <button>Дознајте повеќе </button>
        </Link>
      </div>
    </section>
  );
};

export default HowLeaseback;
