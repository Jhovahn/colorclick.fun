import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const style = {
  height: '100vh',
  width: '100vw',
  backgroundColor: '#3d40ff'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cords: [{ x: 250, y: 250 }],
      target: {
        x: Math.round(Math.random() * Number(window.innerHeight)),
        y: Math.round(Math.random() * Number(window.innerWidth))
      },
      score: 10,
      lastClick: { x: 0, y: 0 }
    };
  }

  getPosition = e => {
    let temp = this.state.cords;
    temp.push(e);
    this.setState({
      cords: temp
    });
  };

  reduceScore = e => {
    let { score, lastClick } = this.state;
    if (score > 0) {
      let temp = score - 1;
      this.setState({
        score: temp,
        lastClick: e
      });
    }
    if (score === lastClick) {
      this.setState({ score: 'WINNER' });
    }
    if (score === 0) {
      this.setState({ score: 'TRY AGAIN' });
    }
    console.log(this.state);
  };

  render() {
    console.log(style);
    const { cords, target, score, lastClick } = this.state;
    const index = cords.length - 1;
    const last = { x: cords[index].x, y: cords[index].y };
    const avg = (last.x / 250 + last.y / 250) / 2;

    return (
      <div
        className="App"
        style={{
          height: '100vh',
          width: '100vw',
          backgroundColor: `rgb(${last.x},${last.y},${avg})`,
          margin: 0,
          padding: 0
        }}
        onMouseMove={e => this.getPosition({ x: e.clientX, y: e.clientY })}
        onClick={e => this.reduceScore({ x: e.clientX, y: e.clientY })}
      >
        <h1 style={{ margin: 0, padding: 0 }}>{`${target.x} ${target.y}`}</h1>
        {/*<h1>{`${last.x} ${last.y}`}</h1>*/}
        <h1>{`${lastClick.x} ${lastClick.y}`}</h1>
        <h1>{`${score}`}</h1>
      </div>
    );
  }
}

export default App;
