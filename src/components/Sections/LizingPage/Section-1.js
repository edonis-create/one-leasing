import { Link } from "react-router-dom";
import "./Section-1.css";

const Offers3 = () => {
  return (
    <section className="offers3">
      <div>
        <h1>Лизинг на возила</h1>
        <h3>Добијте го вашето возило со плаќање месечни рати</h3>
        <p>Неограничени можности</p>

        <Link to="/avtomobili">
          <button>Погледнете ги возилата</button>
        </Link>
      </div>
    </section>
  );
};

export default Offers3;
