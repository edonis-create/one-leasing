import { useState } from "react";
import "./Section-1.css";
import { Link } from "react-router-dom";

export const Offers = () => {
  const slides = [
    {
      image: "./assets/images/cars.webp",
      title: "ONE LEASING",
      subtitle: "Финансирање до 80% од вредноста на возилото",
      description: "Погледнете ги возила во понудата",
      buttonText: "Дознајте повеќе",
    },
    {
      image: "./assets/images/cars-2.webp",
      title: "Добијте го возилото коешто го сонувате",
      subtitle: "Финансирање на сите возила!",
      description: "Повеќе од 200 возила достапни за купување со месечни рати",
      buttonText: "Дознајте повеќе",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const switchBackground = (direction) => {
    if (direction === "right") {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    } else if (direction === "left") {
      setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const currentSlide = slides[currentIndex];

  return (
    <div
      className="offers"
      style={{
        backgroundImage: `url(${currentSlide.image})`,
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className="text-content">
        <h1>{currentSlide.title}</h1>
        <h3>{currentSlide.subtitle}</h3>
        <p>{currentSlide.description}</p>

        <Link to="/avtomobili">
          <button>{currentSlide.buttonText}</button>
        </Link>
      </div>
      <button className="arrow-left" onClick={() => switchBackground("left")}>
        <img src="./assets/icons/left-arrow.png" alt="Left Arrow" />
      </button>
      <button className="arrow-right" onClick={() => switchBackground("right")}>
        <img src="./assets/icons/right-arrow.png" alt="Right Arrow" />
      </button>
    </div>
  );
};

const WhyOneLeasing = () => {
  return (
    <section className="why-one-leasing">
      <div>
        <h2>
          ЗОШТО ДА ГО ОДБЕРЕТЕ ONE <span>LEASING</span>
        </h2>
        <div className="black-line"></div>
        <div className="black-line2"></div>
        <ul>
          <li>Специјализиран за лизинг на автомобили </li>
          <li>Нудиме приспособени решенија за секој поединец или компанија</li>
          <li>Поволни услови и стапки за финансирање</li>
          <li>Едноставен и брз онлајн процес на аплицирање</li>
          <li>Одлична услуга за клиенти</li>
        </ul>
      </div>
      <img src="assets/images/1.webp" alt="one leasing" />
    </section>
  );
};

export default WhyOneLeasing;
