import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import StackList from './StackList';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Le Jeu des Reponses</h2>
        <hr />
        <StackList />
        <hr />
        <Link to='/stack_form'><h4>Créer un nouveau Jeu/Réponses</h4></Link>
      </div>
    )
  }
}

export default App;