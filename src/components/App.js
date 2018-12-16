import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    display: 0,
    number: 0
  }

  updateNumber = (delta) => {
    this.setState( prevState => ({
      number: prevState.number += delta
    }), () => {

      if (this.state.number % 15 === 0) {
        this.setState({
          display: "FizzBuzz"
        });
      } else if (this.state.number % 5 === 0) {
        this.setState({
          display: "Buzz"
        });
      } else if (this.state.number % 3 === 0) {
        this.setState({
          display: "Fizz"
        });
      } else {
        this.setState({
          display: this.state.number
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className="header">A Reactful FizzBuzz Application</div>
        <div className="buttons">
        <button className="increment" onClick={() => this.updateNumber(-1)}>-</button>
        <button className="decrement" onClick={() => this.updateNumber(+1)}>+</button>
        </div>
        <br />
        <div className="number">{this.state.display}</div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
