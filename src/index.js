import React, {Component} from 'react';

class RangeBox extends Component {
  render() {
    return (
      <div>
        <input type="range" id="range-box" name="range-box" min="0" max="11" />
        <label for="range-box">Label</label>
      </div>
    );
  }
}

export default RangeBox;