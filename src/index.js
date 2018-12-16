/* import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
 */
import React, {Component} from 'react'
import "./style.css";

class RangeBox extends Component {
  render() {
    const { step, max, min, textThumb } = this.props
    return (
      <div>
        <input 
          type="range"
          id="range-box"
          name="range-box"
          min={min || 0}
          max={max || 100}
          step={step || 1} />
        <label for="range-box">Label</label>
      </div>
    )
  }
}

export default RangeBox