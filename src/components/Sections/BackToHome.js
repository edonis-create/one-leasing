import "./BackToHome.css";
import { ReactComponent as ArrowRightIcon } from "../../svgs/keyboard_arrow_right.svg";
import { Link } from "react-router-dom";

const BackToHome = ({ currentPage }) => {
  return (
    <div className="back-to-home">
      <div>
        <p>
          <Link to="/">дома</Link>
        </p>
        <ArrowRightIcon />
        <p>
          <span>{currentPage}</span>
        </p>
      </div>
      <h2>{currentPage}</h2>
    </div>
  );
};

export default BackToHome;
