import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      result: ''
    }
  }

  handleClick = button => {
    if (button === '=') {
      this.calculate()
    } else if (button === 'C') {
      this.reset()
    } else if (button === 'B') {
      this.backspace()
    } else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "") + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  }

  reset = () => {
    this.setState({
      result: ""
    })
  }

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }

  render() {
    return (
      <div className="App">
        <div className="calculator">
          <input type="text" value={this.state.result} readOnly />
          <div className="button-container">
            <div className="column-1">
              <button onClick={() => this.handleClick('7')}>7</button>
              <button onClick={() => this.handleClick('4')}>4</button>
              <button onClick={() => this.handleClick('1')}>1</button>
              <button onClick={() => this.handleClick('0')}>0</button>
            </div>
            <div className="column-2">
              <button onClick={() => this.handleClick('8')}>8</button>
              <button onClick={() => this.handleClick('5')}>5</button>
              <button onClick={() => this.handleClick('2')}>2</button>
              <button onClick={() => this.handleClick('.')}>.</button>
            </div>
            <div className="column-3">
              <button onClick={() => this.handleClick('9')}>9</button>
              <button onClick={() => this.handleClick('6')}>6</button>
              <button onClick={() => this.handleClick('3')}>3</button>
              <button onClick={() => this.handleClick('=')}>=</button>
            </div>
            <div className="column-4">
              <button onClick={() => this.handleClick('B')}>⌫</button>
              <button onClick={() => this.handleClick('/')}>÷</button>
              <button onClick={() => this.handleClick('*')}>×</button>
              <button onClick={() => this.handleClick('-')}>-</button>
              <button onClick={() => this.handleClick('+')}>+</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;