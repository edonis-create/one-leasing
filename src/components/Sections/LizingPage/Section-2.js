import { Link } from "react-router-dom";
import "./Section-2.css";

const HowDoesItWork = () => {
  return (
    <section className="how-lizing">
      <div className="upper-div">
        <h2>Како работи</h2>
        <div className="black-line"></div>
        <div className="black-line2"></div>
        <div className="lower-div">
          <div>
            <div className="leasing-icon-container2">
              <img src="/assets/icons/car-green.png" alt="car icon" />
            </div>
            <p>Изберете го автомобилот што го сакате!</p>
          </div>
          <div>
            <div className="leasing-icon-container2">
              <img src="/assets/icons/sms-green.png" alt="message icon" />
            </div>
            <p>Аплицирајте само со телефонски број!</p>
          </div>
          <div>
            <div className="leasing-icon-container2">
              <img src="/assets/icons/contract-green.png" alt="contract icon" />
            </div>
            <p>Поставете ја месечната рата и потпишете го договорот</p>
          </div>
          <div>
            <div className="leasing-icon-container2">
              <img src="/assets/icons/key-green.png" alt="key icon" />
            </div>
            <p>Земете ги клучевите од автомобилот</p>
          </div>
        </div>
        <Link to="/avtomobili">
          <button>Погледнете ги автомобилите </button>
        </Link>
      </div>
    </section>
  );
};

export default HowDoesItWork;
