import { Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../../../../svgs/keyboard_arrow_right.svg";
import { questionsAndAnswers } from "../../../../data/data-faq";
import { useState } from "react";

const FrequentlyAskedQuestionsLB = () => {
  const [visibleAnswer, setVisibleAnswer] = useState(0);

  const toggleAnswer = (index) => {
    setVisibleAnswer(visibleAnswer === index ? "" : index);
  };

  return (
    <section className="faqs">
      <div className="back-to-home_faq">
        <p>
          <Link to="/">дома</Link>
        </p>
        <ArrowRightIcon />
        <p>
          <span>FAQS</span>
        </p>
      </div>

      <div className="left-section">
        <div>
          <h2>Често поставувани прашања</h2>
          <ul className="question-list">
            {questionsAndAnswers["qa-pairs"].map((question, index) =>
              question.leaseback ? (
                <li key={index}>
                  <div onClick={() => toggleAnswer(index)}>
                    <p className="question">{question.question}</p>
                    <button className="show-btn">
                      <strong>{visibleAnswer === index ? "-" : "+"}</strong>
                    </button>
                  </div>
                  <p
                    className={`answer ${
                      visibleAnswer === index ? "" : "hidden"
                    }`}
                  >
                    {question.answer}
                  </p>
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>

        <div className="right-section">
          <div>
            <h4>Често поставувани прашања</h4>
            <ul>
              <li>
                <Link to="/faqs/Autolizing">
                  <p>Auto Lizing</p>
                </Link>
                <ArrowRightIcon />
              </li>
              <li>
                <Link to="/faqs/Leaseback">
                  <p>Leaseback</p>
                </Link>

                <ArrowRightIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrequentlyAskedQuestionsLB;
