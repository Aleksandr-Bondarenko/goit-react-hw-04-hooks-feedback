import React from "react";
import PropTypes from "prop-types";

function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map((option) => {
        return (
          <button onClick={onLeaveFeedback} key={option.name} type="button">
            {option.name}
          </button>
        );
      })}
    </div>
  );
}

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
