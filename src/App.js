import { useState } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

function App() {
  const initialValue = 0;
  const options = ["good", "neutral", "bad"];

  const [good, setGood] = useState(() => initialValue);
  const [neutral, setNeutral] = useState(initialValue);
  const [bad, setBad] = useState(initialValue);

  const onLeaveFeedback = (feedback) => {
    switch (feedback) {
      case "good":
        setGood((prevGood) => prevGood + 1);
        break;

      case "neutral":
        setNeutral((prevNeutral) => prevNeutral + 1);
        break;

      case "bad":
        setBad((prevBad) => prevBad + 1);
        break;

      default:
        return;
    }
  };

  const totalFeedback = good + neutral + bad;
  const positiveFeedback = Math.round((good / totalFeedback) * 100);

  return (
    <div className="AppContainer">
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
        {totalFeedback > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positiveFeedback}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
