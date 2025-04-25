import "./BackToHome.css";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../../svgs/keyboard_arrow_right.svg";

const BackToHomeVehicles = () => {
  return (
    <div className="back-to-home-vehicles">
      <div className="back-to-home_vehicles">
        <p>
          <Link to="/">дома</Link>
        </p>
        <ArrowRightIcon />
        <p>
          <span>огласување</span>
        </p>
      </div>
    </div>
  );
};

export default BackToHomeVehicles;
