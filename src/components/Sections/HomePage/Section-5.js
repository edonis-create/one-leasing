import "./Section-5.css";

const TopBrandsSection = () => {
  return (
    <section className="top-brands">
      <div>
        <h3>Најпродавани брендови</h3>
        <h1>Врвни брендови</h1>
      </div>
      <div className="vehicles">
        <img src="./assets/images/volkswagen.webp" alt="volksawagen car" />
        <img src="./assets/images/audi.webp" alt="audi car" />
        <img src="./assets/images/bmw.webp" alt="bmw car" />
        <img src="./assets/images/opel.webp" alt="opel car" />
        <img src="./assets/images/mercedes.webp" alt="mercedes car" />
      </div>
    </section>
  );
};

export default TopBrandsSection;
