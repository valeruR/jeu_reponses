import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { addStack } from '../actions';

export class StackForm extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      cards: []
    };
  }

  addCard() {
    const { cards } = this.state;
    cards.push({id: cards.length , question: '', answer: '' });
    this.setState({ cards });
  }

  addStack() {
    this.props.addStack(this.state);
  }

  updateCardPart(event, index, part) {
    const { cards } = this.state;
    cards[index][part] = event.target.value;
    this.setState({ cards })
  }

  render() {
    return (
      <div>
        <Link className='link-home' to='/'><h4>Home</h4></Link>
        <h4>Create a New Stack</h4>
        <br />
        <Form inline>
          <Form.Group>
            <Form.Label>Title:</Form.Label>
            {' '}
            <Form.Control onChange={event => this.setState({ title: event.target.value })} />
          </Form.Group>
          {
            this.state.cards.map((card, index) => {
              return (
                <div key={card.id}>
                  <br />
                  <Form.Group>
                    <Form.Label>Question:</Form.Label>
                    {' '}
                    <Form.Control 
                      onChange={event => this.updateCardPart(event, index, 'question')} />
                    {' '}
                    <Form.Label>Answer:</Form.Label>
                    {' '}
                    <Form.Control 
                      onChange={event => this.updateCardPart(event, index, 'answer')} />
                  </Form.Group>
                </div>
              )
            })
          }
        </Form>
        <br />
        <Button onClick={() => this.addCard()}>Add Card</Button>
        {' '}
        <Button onClick={() => this.addStack()}>Save and Add the Stack</Button>
      </div>
    )
  }
}

export default connect(null, { addStack })(StackForm);