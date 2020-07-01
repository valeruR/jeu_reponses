import React, { Component } from 'react';

class Card extends Component {
  constructor() {
    super();

    this.state = {
      reveal: false
    }
  }
  render() {
    const {question, answer } = this.props.card;
    return (
      <div className='card' onClick={() => this.setState({ reveal: !this.state.reveal })}>
        <div className='card-question'><h4>{question}</h4></div>
        <div className='card-answer'><h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>{answer}</h4></div>
      </div>
    )
  }
}

export default Card;