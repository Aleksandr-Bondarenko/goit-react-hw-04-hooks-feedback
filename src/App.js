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

  options = ["good", "neutral", "bad"];

  onLeaveFeedback = (e) => {
    // console.log(e.currentTarget.textContent);
    this.options.map((option) => {
      return option === e.target.textContent
        ? this.setState((prevState) => ({ [option]: prevState[option] + 1 }))
        : this.setState((prevState) => ({ [option]: prevState[option] }));
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, num) => {
      return acc + num;
    }, 0);
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
