import React from 'react';
import { useState } from 'react'
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleFeedback = e => {
    if (e === 'Good') {
      setGood(good + 1);
    } else if (e === 'Neutral') {
      setNeutral(neutral + 1);
    } else if (e === 'Bad') {
      setBad(bad + 1);
    }
  };

  const totalFeedback = e => {
    let total = good + neutral + bad;
    return total;
  };

  const positivePercentage = () => {
    if (totalFeedback() === 0) {
      return 0;
    }
    return Math.round((good / totalFeedback()) * 100);
  };

  return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.handleFeedback}
          />{' '}
        </Section>

        <Section title="Statistics">
          {this.totalFeedback() !== 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.totalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          ) : (
            <Notification message="There is no feedback"></Notification>
          )}
        </Section>
      </div>
    );
}