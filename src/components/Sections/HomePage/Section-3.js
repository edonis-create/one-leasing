import { Link } from "react-router-dom";
import "./Section-3.css";

const BuyOrLoan = () => {
  return (
    <section className="buy-or-loan-section">
      <div className="left-section">
        <div>
          <h3>Дали сакате да купите автомобил?</h3>
          <Link>ЛИЗИНГ ЗА АВТОМОБИЛОТ ОД СОНИШТАТА!</Link>
          <p>
            Достапни се над 200 автомобили со можност за плаќање на рати до 72
            месеци
          </p>
          <img src="assets/images/car-1.webp" alt="background img" />
        </div>
      </div>
      <div className="right-section">
        <div>
          <h3>Дали ви требаат пари?</h3>
          <Link>ЗАЕМ ЗА ТВОЕТО ВОЗИЛО!</Link>
          <p>
            Продадете ни го Вашето возило и продолжете да го користите на
            лизинг. До 80% од вредноста на вашиот автомобил!
          </p>
          <img src="assets/images/car-2.webp" alt="background image" />
        </div>
      </div>
    </section>
  );
};

export default BuyOrLoan;
