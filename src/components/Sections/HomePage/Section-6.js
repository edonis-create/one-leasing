import "./Section-6.css";
import { ReactComponent as Checkmark } from "../../../svgs/checkmark.svg";
import ApplyForLeasing from "./ApplyForLeasing";

const Financing = ({ isVisible, toggleForm }) => {
  return (
    <>
      <div
        className={
          isVisible ? "leasing-form modal-overlay" : "leasing-form-hidden"
        }
      >
        <ApplyForLeasing isVisible={isVisible} toggleForm={toggleForm} />
      </div>

      <section className="financing">
        <img src="assets/images/financing-img.webp" alt="decorative image" />
        <div>
          <h3>ФИНАНСИРАЊЕ</h3>
          <p>
            One Leasing ви носи бескрајни можности за купување автомобил на
            лизинг според вашите потреби!
          </p>
          <div>
            <p>
              <Checkmark /> Lizing
            </p>
            <p>
              <Checkmark /> Leaseback
            </p>
          </div>
          <button onClick={toggleForm}>АПЛИЦИРАЈТЕ ЗА ЛИЗИНГ</button>
        </div>
      </section>
    </>
  );
};

export default Financing;
