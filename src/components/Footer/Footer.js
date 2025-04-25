import { Link } from "react-router-dom";
import "./Footer.css";
import { ReactComponent as InstagramIcon } from "../../svgs/instagram.svg";
import { ReactComponent as FacebookIcon } from "../../svgs/social-facebook.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer-container">
          <img
            src="/assets/images/1.webp"
            alt="one-leasing-logo

"
          />
          <div className="socials">
            <p>
              <Link
                target="_blank"
                to="https://www.facebook.com/virtuslending/"
              >
                <FacebookIcon />
                Facebook
              </Link>
            </p>
            <p>
              <Link
                target="_blank"
                to="https://www.instagram.com/virtuslending/?hl=en"
              >
                <InstagramIcon /> Instagram
              </Link>
            </p>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/about-us">За нас</Link>
              </li>
              <li>
                <Link to="/faqs">FAQs</Link>
              </li>
              <li>
                <Link to="/uslugi">УСЛУГА</Link>
              </li>
              <li>
                <Link to="/contact-us">контакт</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/privacy-policy">Политика за приватност</Link>
              </li>
              <li>
                <Link to="/certificate-and-documents">
                  Документи и сертификати
                </Link>
              </li>
              <li>
                <Link to="/terms-of-use">Услови за користење</Link>
              </li>
              <li>
                <Link to="/cookies-policy">Политика за колачиња</Link>
              </li>
              <li>
                <Link to="/Ценовник">Ценовник</Link>
              </li>
            </ul>
          </div>
          <div className="sign-up">
            <h3>Пријавете се за билтен</h3>
            <div>
              <input placeholder="Внесете ја вашата е-пошта" />
              <button>Аплицирајте</button>
            </div>
          </div>
        </div>
        <p className="company-details">
          Друштво за лизинг ОНЕ ЛИЗИНГ ДООЕЛ Скопје е основано во 2018-та
          година, впишано вo Регистарот на трговски друштва, со ЕМБС 7273614, со
          седиште во Скопје, ул. Наум Наумовски Борче бр. 65, Скопје. финансиска
          компанија со главна дејност на издавање финансиски лизинг. Друштвото
          има решение за основање и работа на Друштво за лизинг, број 13-449/4
          од ден 05.04.2018 година од Министерство за финансии на Република
          Северна Македонија. Лизинг Друштвото ја нуди услугата “Лизинг за
          возила” за сите возила достапни на продажба со јасни услови и долг рок
          на отплата.
        </p>
        <p>© 2025 ONE LEASING</p>
      </div>
    </footer>
  );
};

export default Footer;
