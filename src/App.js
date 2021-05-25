import React, { Component } from 'react';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = event => {
    console.log('Кликнули');
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleIncrementNeutral = event => {
    console.log('Кликнули');
    this.setState({
      neutral: 50,
    });
  };

  handleIncrementBad = event => {
    console.log('Кликнули');
    this.setState({
      bad: 50,
    });
  };

  render() {
    return (
      <div className="statistic">
        <h2>Please leave feedback</h2>
        <button type="button" onClick={this.handleIncrementGood}>
          Good
        </button>
        <button type="button" onClick={this.handleIncrementNeutral}>
          Neutral
        </button>
        <button type="button" onClick={this.handleIncrementBad}>
          Bad
        </button>

        <h2>Statistics</h2>
        <p>Good: {this.state.good}</p>
        <p>Neutral: {this.state.neutral}</p>
        <p>Bad: {this.state.bad}</p>
      </div>
    );
  }
}

export default App;
