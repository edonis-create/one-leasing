import { Link } from "react-router-dom";
import "./Section-1.css";

const Offers4 = () => {
  return (
    <div className="offers4">
      <div>
        <h1>Неограничени можности</h1>
        <h3>Брзо, Лесно, Безбедно</h3>
        <p>Лизинг на возила</p>

        <Link to="/avtomobili">
          <button>Дознајте повеќе</button>
        </Link>
      </div>
    </div>
  );
};

export default Offers4;
