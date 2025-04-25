import "./Section-2.css";

const LeasingOffers = () => {
  return (
    <section className="leasing-offers-section">
      <div className="left-section">
        <h4>Лизинг на автомобили</h4>
        <p>Ние го финансираме автомобилот од вашите соништа!</p>
        <ul>
          <li>
            Износ на финансирање
            <ol>
              <li>Физички лица до 10,000 €​ </li>
              <li>Правни лица до 15,000 €</li>
            </ol>
          </li>
          <li>Финансирање до 80% од вредноста на автомобилот</li>
          <li>Времетраење до 72 месеци</li>
        </ul>
      </div>
      <div className="right-section">
        <h4>Leaseback</h4>
        <p>Leaseback - обратен лизинг </p>
        <ul>
          <li>Лизинг на вашето возило.</li>
          <li>Времетраење до 72 месеци</li>
          <li>Максимална вредност до 15,000 €</li>
        </ul>
      </div>
    </section>
  );
};

export default LeasingOffers;
