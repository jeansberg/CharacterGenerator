import React from 'react';
import ReactDOM from 'react-dom';
import CharacterSheet from './components/CharacterSheet'

const apiUrl = 'http://localhost:3001/';

ReactDOM.render(
    <div>
        <p>Hello</p>
        <CharacterSheet url={apiUrl} />

    </div>, document.getElementById('root'));