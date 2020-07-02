import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { StackForm } from './StackForm';

configure({ adapter: new Adapter() });

const changeTitle = 'change title';
const changeQuestion = 'change anwer';
const changeAnswer = 'change Answer';

describe('StackForm', () => {
  const stackForm = shallow(<StackForm />);

  it('renders the form title', () => {
    expect(stackForm.find('h4').at(1).text()).toEqual('Create a New Stack');
  });

  it('renders a link home', () => {
    expect(stackForm.find('h4').first().text()).toEqual('Home');
  });

  it('renders a Form component', () => {
    expect(stackForm.find('Form').exists()).toBe(true);
  });

  it('renders a button to add a new card', () => {
    expect(stackForm.find('Button').at(0).props().children).toEqual('Add Card');
  });

  it('renders a button to submit', () => {
    expect(stackForm.find('Button').at(1).props().children).toEqual('Save and Add the Stack');
  });

  describe('and updating the title', () => {
    beforeEach(() => {
      stackForm.find('FormControl').simulate('change', { target: { value: changeTitle}});
    });

    it('update the title in state', () => {
      expect(stackForm.state().title).toEqual(changeTitle);
    });
  });

  describe('when adding a new card', () => {
    beforeEach(() => {
      stackForm.find('Button').at(0).simulate('click')
    });

    afterEach(() => {
      stackForm.setState({ cards: [] });
    });

    it('adds a new card to the state', () => {
      expect(stackForm.state().cards.length).toEqual(1);
    });

    it('renders the question section', () => {
      expect(stackForm.find('FormLabel').at(1).props().children).toEqual('Question:');
    });

    it('renders the question section', () => {
      expect(stackForm.find('FormLabel').at(2).props().children).toEqual('Answer:');
    });

    describe('and updating the card question', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(1)
          .simulate('change', { target: { value: changeQuestion}});
      });

      it('updates the question in the state', () => {
        expect(stackForm.state().cards[0].question).toEqual(changeQuestion);
      });
    });

    describe('and updating the card answer', () => {
      beforeEach(() => {
        stackForm.find('FormControl').at(2)
          .simulate('change', {target: { value: changeAnswer}});
      });

      it('updates the answer in the state', () => {
        expect(stackForm.state().cards[0].answer).toEqual(changeAnswer);
      })
    })
  })
});