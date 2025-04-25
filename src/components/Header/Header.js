import "./Header.css";
import { ReactComponent as HeartIcon } from "../../svgs/heart.svg";
import { ReactComponent as FolderIcon } from "../../svgs/folder-open-o.svg";
import { ReactComponent as CommentIcon } from "../../svgs/commenting-o.svg";
import { ReactComponent as ArrowDown } from "../../svgs/keyboard_arrow_down.svg";
import { ReactComponent as ArrowRight } from "../../svgs/keyboard_arrow_right.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-header">
        <div>
          <Link to="/about-us">
            <HeartIcon /> За нас
          </Link>
          <Link to="/faqs">
            <FolderIcon /> FAQs
          </Link>
          <Link to="/posts">
            <CommentIcon /> Blog
          </Link>
        </div>
      </div>
      <div className="bottom-header">
        <Link to="/">
          <img src="/assets/images/logo.webp" alt="one-leasing-logo" />
        </Link>
        <div>
          <div className="services-page">
            <Link to="/uslugi">
              УСЛУГА <ArrowDown />
            </Link>
            <ul className="hidden">
              <Link to="/service/lizing">
                <li id="lizing">Lizing</li>
              </Link>
              <Link to="/service/leaseback">
                <li>Leaseback</li>
              </Link>
            </ul>
          </div>
          <div className="vehicles-page">
            <Link>
              Возила <ArrowDown />
            </Link>
            <div className="hidden">
              <div className="inner-div">
                <ul>
                  <Link to="/avtomobili">
                    <li>
                      <ArrowRight />
                      Сите
                    </li>
                  </Link>
                  <Link to="/avtomobili">
                    <li>
                      <ArrowRight />
                      Половни
                    </li>
                  </Link>
                  <Link to="/avtomobili-offer-yes">
                    <li>
                      <ArrowRight />
                      Понуда
                    </li>
                  </Link>
                </ul>
                <div>
                  <h3>Бренд</h3>
                  <div className="car-brands">
                    <img src="/assets/images/audi.webp" alt="audi" />
                    <img src="/assets/images/bmw.webp" alt="bmw" />
                    <img src="/assets/images/citroen.webp" alt="citroen" />
                    <img src="/assets/images/mercedes.webp" alt="mercedes" />
                    <img src="/assets/images/opel.webp" alt="opel" />
                    <img src="/assets/images/peugeot.webp" alt="peugeot" />
                    <img src="/assets/images/seat.webp" alt="seat" />
                    <img src="/assets/images/skoda.webp" alt="skoda" />
                    <img src="/assets/images/toyota.webp" alt="toyota" />
                    <img
                      src="/assets/images/volkswagen.webp"
                      alt="volkswagen"
                    />
                  </div>
                </div>
                <div>
                  <h3>Тип на возило</h3>
                  <div className="car-types">
                    <div>
                      <img src="/assets/images/van.webp" alt="van" />
                      <p>комбе</p>
                    </div>
                    <div>
                      <img
                        src="/assets/images/hatchback.webp"
                        alt="hatchback"
                      />
                      <p>Лимузина</p>
                    </div>
                    <div>
                      <img src="/assets/images/estate.webp" alt="estate" />
                      <p>Каравани</p>
                    </div>
                    <div>
                      <img src="/assets/images/coupe.webp" alt="coupe" />
                      <p>Купе</p>
                    </div>
                    <div>
                      <img src="/assets/images/sedan.webp" alt="sedan" />
                      <p>Лимузина</p>
                    </div>
                    <div>
                      <img src="/assets/images/minivan.webp" alt="minivan" />
                      <p>комбе</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Link to="/contact-us">контакт</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
