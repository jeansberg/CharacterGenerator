import React from 'react';
import ReactDOM from 'react-dom';
import MultipleChoice from './components/MultipleChoice';
import FreeText from './components/FreeText';

const apiUrl = 'http://localhost:3001/';
//const choices = [{id:1, name:"Skill 1"}];

ReactDOM.render(
    <div>
    <p>Hello</p>
    <FreeText title="Name" name="Name"/>
    <MultipleChoice url={apiUrl + 'skills'} title="Skills"/>
</div>, document.getElementById('root'));