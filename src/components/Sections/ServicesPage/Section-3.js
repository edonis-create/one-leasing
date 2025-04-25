import "./Section-3.css";
import { ReactComponent as CoinsIcon } from "../../../svgs/coins.svg";
import { ReactComponent as SteeringWheelIcon } from "../../../svgs/steering wheel.svg";

const Why_One_Leasing2 = () => {
  return (
    <section className="why_one_leasing2">
      <div className="left-section">
        <h1>Зошто да го изберете One Leasing?</h1>
        <ul>
          <li>Специјализиран за изнајмување автомобили и заеми</li>
          <li>Нудиме приспособени решенија за секој поединец</li>
          <li>Поволни услови и стапки за финансирање</li>
          <li>Едноставен и онлајн процес на аплицирање</li>
          <li>Одлична услуга за клиенти</li>
        </ul>
      </div>
      <div className="right-section">
        <div>
          <div>
            <h1>01.</h1>
            <SteeringWheelIcon />
          </div>
          <h4>Lizing</h4>
          <p>
            Финансирање за сите видови автомобили. Плаќање на месечни рати до 72
            месеци
          </p>
        </div>
        <div>
          <div>
            <h1>02.</h1>
            <CoinsIcon />
          </div>
          <h4>messages.</h4>
          <p>
            Добијте лизинг на вашиот сопствен автомобил. До 80% од вредноста на
            вашиот автомобил!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Why_One_Leasing2;
