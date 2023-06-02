// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onMangoesIncrement = () => {
    this.setState(prevState => ({
      mangoesCount: prevState.mangoesCount + 1,
    }))
  }

  onBananasIncrement = () => {
    this.setState(prevState => ({
      bananasCount: prevState.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="fruits-bg-container">
        <div className="fruits-container">
          <h1 className="fruits-counter-heading">
            Bob ate <span className="fruits-count">{mangoesCount}</span> mangoes{' '}
            <span className="fruits-count">{bananasCount}</span> bananas
          </h1>
          <div className="fruits-container1">
            <div className="fruits-item-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.onMangoesIncrement}
              >
                Eat Mango
              </button>
            </div>
            <div className="fruits-item-container">
              <img
                className="fruit-image"
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.onBananasIncrement}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
