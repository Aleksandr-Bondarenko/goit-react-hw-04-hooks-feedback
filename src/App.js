import React, { Component } from "react";
import "./App.css";
import Section from "./components/Section/Section";
import Statistics from "./components/Statistics/Statistics";
import Notification from "./components/Notification/Notification";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  title = "Please leave feedback";

  message = "No feedback given";

  options = [{ name: "Good" }, { name: "Neutral" }, { name: "Bad" }];

  onLeaveFeedback = (e) => {
    // const keys = Object.keys(this.state);
    // const index = arr.indexOf(e.target.innerText.toLowerCase());
    // console.log(index);

    // for (const key of keys) {

    // }

    switch (e.target.innerText.toLowerCase()) {
      case "good":
        this.setState((prevState) => ({ good: prevState.good + 1 }));
        break;

      case "neutral":
        this.setState((prevState) => ({ neutral: prevState.neutral + 1 }));
        break;

      case "bad":
        this.setState((prevState) => ({ bad: prevState.bad + 1 }));
        break;

      default:
        console.log("Invalid subscription type");
    }
  };

  countTotalFeedback = () => {
    let totalValue = null;
    for (const key in this.state) {
      totalValue += this.state[key];
    }
    return totalValue;
  };

  countPositiveFeedbackPercentage = () => {
    let positiveValuePercentage = null;

    this.countTotalFeedback() === 0
      ? (positiveValuePercentage = 0)
      : (positiveValuePercentage = Math.round(
          (this.state.good / this.countTotalFeedback()) * 100
        ));

    return positiveValuePercentage;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="AppContainer">
        <Section title={this.title} children>
          <FeedbackOptions
            options={this.options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={this.message} />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
