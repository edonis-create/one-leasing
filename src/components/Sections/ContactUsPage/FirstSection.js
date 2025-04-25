import "./FirstSection.css";
import { ReactComponent as PhoneIcon } from "../../../svgs/phone.svg";
import { ReactComponent as LocationIcon } from "../../../svgs/location_on.svg";
import { ReactComponent as EmailIcon } from "../../../svgs/mail.svg";
import { Link } from "react-router-dom";

const FirstSection = () => {
  return (
    <div>
      <section className="contact-us-section">
        <div className="container">
          <div className="form-div">
            <div className="form-left">
              <div className="input-div">
                <input type="text" placeholder="име"></input>
              </div>
              <div className="input-div">
                <input type="text" placeholder="е-пошта"></input>
              </div>
              <div className="input-div">
                <input type="text" placeholder="предмет"></input>
              </div>
            </div>
            <div className="form-mid">
              <div className="input-message">
                <textarea rows="6" placeholder="Message..." />
              </div>
            </div>
            <div className="form-right">
              <div className="info-div grey-p">
                <LocationIcon />
                <p> Адреса: ул. Наум Наумовски Борче бр. 65, Скопје </p>
              </div>
              <div className="info-div grey-p">
                <PhoneIcon />
                <p>+389 2 277 5555</p>
                <p>+389 70 330 979 - Mobile</p>
              </div>
              <div className="info-div">
                <EmailIcon />
                <Link to="mailto:info@oneleasing.com">info@oneleasing.com</Link>
              </div>
            </div>
          </div>

          <div className="btn-div">
            <button className="submit-button" type="submit">
              Испрати
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
