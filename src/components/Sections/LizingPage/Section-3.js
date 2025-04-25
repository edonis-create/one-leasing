import "./Section-3.css";

const FinancingOptions = () => {
  return (
    <section className="financing-options">
      <div>
        <img src="/assets/icons/money-bag.png" alt="moneybag icon" />
        <h4>Износ на финансирање</h4>
        <ul>
          <li>
            <span>&#10003;</span> За физички лица до 600,000.00 ден
          </li>
          <li>
            <span>&#10003;</span> За бизниси до 1,000,000.00 ден
          </li>
        </ul>
      </div>
      <div>
        <img src="/assets/icons/thumbs-up.png" alt="thumbs up icon" />
        <h4>Финансирање за поединци</h4>
        <ul>
          <li>
            <span>&#10003;</span> Копија од лична карта
          </li>
          <li>
            <span>&#10003;</span> Сметка за комунални услуги
          </li>
          <li>
            <span>&#10003;</span> Доказ за приход
          </li>
        </ul>
      </div>
      <div>
        <img src="/assets/icons/thumbs-up.png" alt="thumbs up icon" />
        <h4>Финансирање за бизниси</h4>
        <ul>
          <li>
            <span>&#10003;</span> деловен сертификат
          </li>
          <li>
            <span>&#10003;</span> Доказ за оптек
          </li>
          <li>
            <span>&#10003;</span> ИД на сопственикот
          </li>
        </ul>
      </div>
    </section>
  );
};

export default FinancingOptions;
