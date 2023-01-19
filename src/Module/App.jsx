import React, { Component } from 'react';
import './App.module.css';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Statistics/Notification';

const keyOptions = ['good', 'neutral', 'bad'];
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state.good + this.state.neutral;
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keyOptions}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>
        <Section title={`Statistics`}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={`There is no feedback`} />
          )}
        </Section>
      </>
    );
  }
}

export default App;