import "./Section-2.css";

const Why_One_Leasing = () => {
  return (
    <section className="why_one_leasing">
      <div className="upper-container">
        <div>
          <h2>
            Зошто треба да финансирате автомобил со One <span>Leasing</span>
          </h2>
          <div className="black-line"></div>
          <div className="black-line2"></div>
          <p>
            Лизинг на автомобили од повеќе од 80 автосалони низ Северна
            Македонија. Изберете автомобил од кој сакате Авто плац и аплицирајте
            во „ONE LEASING“ за финансирање до 15,000 € со можности за отплата
            до 72месеци. Без гарант, без созаемопримач, само со документ за
            идентификација!
          </p>
        </div>
        <div>
          <h5>Зошто да изберете One Leasing?</h5>
          <ul>
            <li>Специјализиран за финансирење секаков вид автомобили </li>
            <li>Нудиме приспособени решенија за секој поединец и компанија</li>
            <li>Поволни услови и стапки за финансирање</li>
            <li>Едноставен и брз онлајн процес на аплицирање</li>
            <li>Одлична услуга за клиенти</li>
          </ul>
        </div>
      </div>
      <div className="lower-container">
        <div>
          <img src="assets/icons/car-black.png" alt="black-car-icon" />
          <h2>191+</h2>
          <p>Вкупно возила</p>
        </div>
        <div>
          <img
            src="assets/icons/personal-security black.png"
            alt="personal-security icon"
          />
          <h2>8+</h2>
          <p>Овластени дилери</p>
        </div>
        <div>
          <img src="assets/icons/heart.png" alt="heart icon" />
          <h2>856+</h2>
          <p>Продадени авотомобили</p>
        </div>
        <div>
          <img src="assets/icons/trophy.png" alt="trophy icon" />
          <h2>32+</h2>
          <p>Специјална понуда</p>
        </div>
      </div>
    </section>
  );
};

export default Why_One_Leasing;
