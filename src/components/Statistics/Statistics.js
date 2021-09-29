import React from "react";
import PropTypes from "prop-types";
import "animate.css";

import s from "./Statistics.module.css";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  const statClasses = [`${s.box}`, "animate__animated", "animate__zoomIn"];
  return (
    <div className={statClasses.join(" ")}>
      <p className={s.title}>Statistics</p>
      <div className={s.feedbackBox}>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
      </div>
      <div className={s.totalBox}>
        <p>Total: {total}</p>
        <p>
          Positive feedback: {positivePercentage}
          &#37;
        </p>
      </div>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
