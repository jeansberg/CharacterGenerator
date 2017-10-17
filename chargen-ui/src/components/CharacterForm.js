import React, { Component } from 'react';
import MultipleChoice from './MultipleChoice';
import FreeText from './FreeText';

class CharacterForm extends Component {
    constructor(props) {
        super(props);
        this.handleMajorChange = this.handleMajorChange.bind(this);
        this.handleSkillChange = this.handleSkillChange.bind(this);
        this.handleAbilityChange = this.handleAbilityChange.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.url = this.props.url;
        this.abilityChoices = 2;
        this.state = { name: 'abc', type: undefined, selectedSkill: undefined, selectedAbilities: [] }
    }

    handleNameChange(name, value) {
        let newState = {};
        newState['name'] = value;
        this.setState(newState)
    }
    handleSkillChange(name, value) {

    }
    handleAbilityChange(name, value) {

    }
    handleMajorChange(name, value) {
        let newState = {};
        newState[name] = value;
        this.setState(newState)
    }
    render() {
        const name = this.state.name;
        const type = this.state.type;
        const descriptor = this.state.descriptor;
        const focus = this.state.focus;
        const selectedSkill = this.state.selectedSkill;
        const selectedAbilities = this.state.selectedAbilities;
        return (
            <div>
                <p>Name: {name}, {descriptor} {type} who {focus}</p>
                <FreeText name="name" title="Name" value={name} onChange={this.handleNameChange} />
                <MultipleChoice name="type" title="Type" value={type} url={this.url + 'types'} allowMultiple={false} onChange={this.handleMajorChange} />
                <MultipleChoice name="descriptor" title="Descriptor" value={descriptor} url={this.url + 'descriptors'} allowMultiple={false} onChange={this.handleMajorChange} />
                <MultipleChoice name="focus" title="Focus" value={focus} url={this.url + 'foci'} allowMultiple={false} onChange={this.handleMajorChange} />
                <hr />
                {type === 'Glaive' &&

                    <MultipleChoice name="skill" title="Skill" value={selectedSkill} url={this.url + 'skills'} allowMultiple={false} onChange={this.handleSkillChange} />
                }
                {type === 'Jack' &&

                    <FreeText name="skill" title="Skill" value={selectedSkill} onChange={this.handleSkillChange} />
                }

                <MultipleChoice name="abilities" title="Abilities" value={selectedAbilities} url={this.url + 'abilities'} allowMultiple={true} numChoices={this.abilityChoices} onChange={this.handleAbilityChange} />
            </div>
        );
    }
}
export default CharacterForm;