// bring in React and Component from React

import React, {Component} from 'react';

// define our Hello component
class Hello extends Component {
  // what should the component render?
  constructor props {
    // make call to parent class' (Component) constructor
    super()
    this.state = {
      moodPoints: 1
    }
  }
  render () {

    // make sure to return some UI
    return (

      <div>
        <h1>Hi there {this.props.name}!</h1>
        <h3>It is tea time...</h3>
        <h2>{this.props.name} is {this.props.age}.</h2>
        <h3>{this.props.name} likes {this.props.favourites}. </h3>
        <p>You are this happy: {this.state.moodPoints}</p>

      </div>
    )
  }
}


class Sayonara extends Component {

  render () {
    return (
      <div>
        <h2>{this.props.favourites}</h2>
      </div>
    )
  }
}


export default Hello
