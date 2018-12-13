import React, {Component} from 'react';

class RangeSlider extends Component {
  render() {
    return (
      <div>
        <input type="range" id="range-slider" name="range-slider" min="0" max="11" />
        <label for="range-slider">Label</label>
      </div>
    );
  }
}

export default RangeSlider;