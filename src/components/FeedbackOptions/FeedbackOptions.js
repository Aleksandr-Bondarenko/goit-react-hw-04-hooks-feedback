import React from "react";
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={s.btnBox}>
      {options.map((option, index) => {
        return (
          <button
            className={s.btn}
            onClick={() => onLeaveFeedback(option)}
            key={index}
            type="button"
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
