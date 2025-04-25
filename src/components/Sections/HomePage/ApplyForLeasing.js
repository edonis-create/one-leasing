import "./ApplyForLeasing.css";
import { ReactComponent as XIcon } from "../../../svgs/x.svg";
import { useEffect, useState } from "react";

const ApplyForLeasing = ({ isVisible, toggleForm }) => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => setShowMore((prev) => !prev);

  const [formData, setFormData] = useState({
    namee: "",
    prezime: "",
    licenBroj: "",
    telefon: "",
    agree1: false,
    agree2: false,
    agree3: false,
  });

  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    const { namee, prezime, licenBroj, telefon, agree1, agree2, agree3 } =
      formData;
    const allFilled =
      namee && prezime && licenBroj && telefon && agree1 && agree2 && agree3;
    setIsFormValid(allFilled);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Qetu i thu qka po don me bo masi e prek buttonin///////////////////////////////////
  };

  //-----------------------------------------------------------------------------------

  return (
    <div className="applyForLeasing">
      <form onSubmit={handleSubmit}>
        <div className="apply-header">
          <h3>АПЛИЦИРАЈТЕ ЗА ЛИЗИНГ</h3>
          <span onClick={toggleForm}>
            <XIcon />
          </span>
        </div>

        <div className="apply-divs">
          <div className="apply-input-div">
            <p>
              име <span className="required">(required)</span>
            </p>
            <input
              type="text"
              name="namee"
              placeholder="име"
              value={formData.namee}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-input-div">
            <p>
              презимето <span className="required">(required)</span>
            </p>
            <input
              type="text"
              name="prezime"
              placeholder="презимето"
              value={formData.prezime}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-input-div">
            <p>
              Личен број <span className="required">(required)</span>
            </p>
            <input
              type="text"
              name="licenBroj"
              placeholder="Личен број"
              value={formData.licenBroj}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-input-div">
            <p>
              Телефонски број <span className="required">(required)</span>
            </p>
            <input
              type="text"
              name="telefon"
              placeholder="Телефонски број"
              value={formData.telefon}
              onChange={handleChange}
              required
            />
          </div>

          <div className="apply-input-div">
            <p>е-пошта</p>
            <input
              type="email"
              name="email"
              placeholder="е-пошта"
              onChange={handleChange}
            />
          </div>

          <div className="apply-div">
            <hr />
            <h3>финансирање за :</h3>
            <ul className="lizing-leasback-ul">
              <li>
                <label>
                  <input
                    type="radio"
                    name="listItem"
                    value="Lizing"
                    defaultChecked
                  />
                  Lizing
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" name="listItem" value="Leaseback" />
                  Leaseback
                </label>
              </li>
            </ul>
          </div>

          <div className="apply-div hover-all-green">
            <hr />
            <ul className="checkbox-agree">
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="agree1"
                    checked={formData.agree1}
                    onChange={handleChange}
                    required
                  />
                  <p>
                    При чиста свест и под полна кривична и материјална
                    одговорност, изјавувам дека: моите лични податоци кои ги
                    имам доставено, ги давам доброволно, во целост се точни и
                    истите можат да бидат употребени при склучување на договор
                    за лизинг;
                  </p>

                  {showMore && (
                    <div
                      className={`show-more-div ${showMore ? "expanded" : ""}`}
                    >
                      <p>
                        сум запознаен/а со политиката за приватност на оваа WEB
                        страница;
                      </p>
                      <p>
                        се согласувам, да се изврши проверка на мојата кредитна
                        способност со превземање на податоци за мојата кредитна
                        историја од Македонското Кредитно Биро АД Скопје.
                      </p>
                      <p>
                        Изјавувам дека сум запознаен/а со кривичната постапка за
                        измама, во случај ако оваа изјава се покаже дека е
                        неточна и нецелосна.
                      </p>
                      <p>Запознаен/a сум дека:</p>
                      <p>
                        Администратор на моите лични податоци е Друштво за
                        лизинг Оне Лизинг ДООЕЛ Скопје со регистрирано седиште
                        на Ул. Васил Главинов бр.14/2-8, Скопје, Македонија со
                        ЕМБС 7273614.
                      </p>
                      <p>
                        МКБ смее да изготви и достави извештај на Корисникот на
                        податоци само со моја претходна согласност.
                      </p>
                      <p>
                        Имам право да побарам увид во податоците од МКБ а кои се
                        однесуваат на мене, како и да ја оспорам точноста и
                        целосноста на кој било податок содржан во извештајот.
                      </p>
                      <p>
                        МКБ не сноси никаква одговорност за податоците содржани
                        во извештајот или за каква било неповолна активност
                        преземена од Корисникот на податоците кон мене,
                        заснована целосно или делумно на извештајот, освен во
                        случај на доставување на лажни информации со цел да ми
                        наштети мене, на давателот на податоци или на корисникот
                        на податоци.
                      </p>
                      <p>
                        МКБ ги брише податоците за кредитите или сметките на мое
                        име, 5 години по отплатата на обврската или затворање на
                        сметката.
                      </p>
                      <p>
                        Имам право да ја повлечам оваа согласност со доставување
                        на Барање во писмена форма.
                      </p>
                      <p>
                        Во согласност со одредбите од Законот за заштита на
                        личните податоци (Објавен е во службен весник на
                        Република Северна Македонија бр. 42/20) имам право на
                        корекција на содржината на моите лични податоци.
                      </p>
                    </div>
                  )}
                  <span onClick={handleToggle}>
                    {showMore ? "Прочитај помалку" : "Прочитај повеќе"}
                  </span>
                </label>
              </li>
            </ul>
          </div>
          <br />
          <div className="apply-div">
            <ul className="checkbox-agree">
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="agree2"
                    checked={formData.agree2}
                    onChange={handleChange}
                    required
                  />
                  При чиста свест и под полна кривична и материјална
                  одговорност, изјавувам дека дека ги имам прочитано и дека сум
                  детално запознаен/а со Општите услови за давање на Лизинг
                  наведени на линкот подолу. Општи услови за користење
                </label>
              </li>
            </ul>
          </div>
          <br />
          <div className="apply-div">
            <ul className="checkbox-agree">
              <li>
                <label>
                  <input
                    type="checkbox"
                    name="agree3"
                    checked={formData.agree3}
                    onChange={handleChange}
                    required
                  />
                  Се согласувам да добивам комерцијални информации за
                  производите кои ги нуди Друштво за лизинг Оне Лизинг ДООЕЛ
                  Скопје, преку електронските средства за комуникација,
                  вклучително, но не ограничено на E-mail и ЅМЅ пораки.
                </label>
              </li>
            </ul>
          </div>

          <div className="apply-div">
            <button
              type="submit"
              className={
                isFormValid
                  ? "submit-apply-button"
                  : "submit-apply-button-invalid"
              }
              disabled={!isFormValid}
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ApplyForLeasing;
