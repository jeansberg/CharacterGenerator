import React, { Component } from 'react';
import MultipleChoice from './MultipleChoice';
import FreeText from './FreeText';

class CharacterForm extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.url;
        this.handleNameChange = this.props.handleNameChange;
        this.handleSkillChange = this.props.handleSkillChange;
        this.handleAbilityChange = this.props.handleAbilityChange;
        this.handleMajorChange = this.props.handleMajorChange;
    }


    render() {
        const name = this.props.name;
        const type = this.props.type;
        const descriptor = this.props.descriptor;
        const focus = this.props.focus;
        const selectedSkill = this.props.selectedSkill;
        const selectedAbilities = this.props.selectedAbilities;
        return (
            <div>
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