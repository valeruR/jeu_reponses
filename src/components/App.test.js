import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter() });

describe('App', () => {
  const app = shallow(<App />);

  it('renders the Card title', () => {
    expect(app.find('h2').text()).toEqual('Le Jeu des Reponses')
  });

  it('check the List', () => {
    expect(app.find('Connect(StackList)').exists()).toBe(true);
  })

  it('renders a link to create a new stack', () => {
    expect(app.find('Link h4').text()).toEqual('Créer un nouveau Jeu/Réponses');
  })
});