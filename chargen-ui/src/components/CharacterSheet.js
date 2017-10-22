import React, {Component} from 'react';
import CharacterForm from './CharacterForm';
import CharacterDescription from './CharacterDescription';

class CharacterSheet extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.url;
        this.abilityChoices = 2;

        this.handleMajorChange = this
            .handleMajorChange
            .bind(this);
        this.handleSkillChange = this
            .handleSkillChange
            .bind(this);
        this.handleAbilityChange = this
            .handleAbilityChange
            .bind(this);
        this.handleNameChange = this
            .handleNameChange
            .bind(this);

        this.state = {
            name: '',
            type: undefined,
            selectedSkill: undefined,
            selectedAbilities: []
        }
    }
    handleNameChange(name, value) {
        let newState = {};
        newState['name'] = value;
        this.setState(newState)
        console.log(newState);
    }
    handleSkillChange(name, value) {}
    handleAbilityChange(name, value) {}
    handleMajorChange(name, value) {
        let newState = {};
        newState[name] = value;
        this.setState(newState)
        if (name === 'type') {
            console.log('Changing type')
        }
    }
    render() {
        const name = this.state.name;
        const type = this.state.type;
        const descriptor = this.state.descriptor;
        const focus = this.state.focus;
        const selectedSkill = this.state.selectedSkill;
        const selectedAbilities = this.state.selectedAbilities;
        return (
            <div className="row">
                <div className="col-sm-6">
                    <CharacterForm
                    url={this.url}
                    name={name}
                    type={type}
                    descriptor={descriptor}
                    focus={focus}
                    selectedSkill={selectedSkill}
                    selectedAbilities={selectedAbilities}
                    handleNameChange={this.handleNameChange}
                    handleSkillChange={this.handleSkillChange}
                    handleAbilityChange={this.handleAbilityChange}
                    handleMajorChange={this.handleMajorChange}/>
                    </div>
                <div className="col-sm-6">
                    <CharacterDescription
                    name={name}
                    type={type}
                    descriptor={descriptor}
                    focus={focus}/>
                </div>
            </div>
        );
    }
}

export default CharacterSheet;