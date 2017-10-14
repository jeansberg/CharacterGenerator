import React from 'react';
import ReactDOM from 'react-dom';
import CharacterForm from './components/CharacterForm'

const apiUrl = 'http://localhost:3001/';
//const choices = [{id:1, name:"Skill 1"}];

ReactDOM.render(
    <div>
    <p>Hello</p>
    <CharacterForm url ={apiUrl}/>

</div>, document.getElementById('root'));