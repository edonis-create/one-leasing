import "./BlogSection.css";
import { ReactComponent as ArrowRightIcon } from "../../../svgs/keyboard_arrow_right.svg";
import { Link } from "react-router-dom";

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="back-to-home_blog">
        <p>
          <Link to="/">дома</Link>
        </p>
        <ArrowRightIcon />
        <p>
          <span>Вести</span>
        </p>
      </div>
      <div className="main-blog">
        <div className="blog-containers">
          <h4>
            <p>Категорија</p>
          </h4>
          {/* <progress className="bar" value={30} max={100}></progress> */}
        </div>
        <div className="blog-containers lower-blog">
          <h4>
            <p>Архиви</p>
          </h4>
          {/* <progress className="bar"></progress> */}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
