import React from 'react'
import ReactDOM from 'react-dom'
import "./style.css";

class RangeBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 0
    }
  }

  componentDidMount() {
    this.setValue()
  }

  setValue() {
    const { max } = this.props
    const label = this.label
    const inputSizes = ReactDOM.findDOMNode(this.input)
    const value = parseInt(this.input.value)

    this.setState({
      inputValue: parseInt(this.input.value)
    }, () => {
      const percent = max ? value / max : value / 100
      const thumbWidthSpace = 48
      const newPoint = Math.abs(percent * (inputSizes.clientWidth - thumbWidthSpace))

      label.style.left = newPoint  + "px"
    })
  }

  render() {
    const { step, max, textThumb } = this.props
    const { inputValue } = this.state

    return (
      <div id="range-box-wrapper">
        <input
          type="range"
          id="range-box"
          name="range-box"
          min="0"
          max={max || 100}
          step={step || 1}
          value={inputValue}
          ref={input => this.input = input}
          onChange={() => this.setValue()} />
        <label
          htmlFor="range-box"
          ref={(label) => (this.label = label)}
          className="range-box-label">
          {inputValue}{textThumb}
        </label>
      </div>
    )
  }
}

export default RangeBox