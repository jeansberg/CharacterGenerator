import React, {Component} from 'react';
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
                <form>
                <div className="card">
                <h4 className="card-header">Fundamental Choices</h4>
                    <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">The main choices that will define your character</h6>
                        <FreeText
                            name="name"
                            title="Name"
                            value={name}
                            onChange={this.handleNameChange}/>
                        <MultipleChoice
                            name="type"
                            title="Type"
                            value={type}
                            helpText="Determines your character's statistics, skills, and abilities"
                            url={this.url + 'types'}
                            allowMultiple={false}
                            onChange={this.handleMajorChange}/>
                        <MultipleChoice
                            name="descriptor"
                            title="Descriptor"
                            value={descriptor}
                            helpText="Further describes your character's personality and traits"
                            url={this.url + 'descriptors'}
                            allowMultiple={false}
                            onChange={this.handleMajorChange}/>
                        <MultipleChoice
                            name="focus"
                            title="Focus"
                            value={focus}
                            helpText="Really distinguishes and specializes your character"
                            url={this.url + 'foci'}
                            allowMultiple={false}
                            onChange={this.handleMajorChange}/>
                    </div>
                </div>
                <div className="card">
                    <h4 className="card-header">Skills and Abilities</h4>
                <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">The skills and abilities your character possesses</h6>   {type === 'Glaive' && <MultipleChoice
                            name="skill"
                            title="Skill"
                            value={selectedSkill}
                            url={this.url + 'skills'}
                            allowMultiple={false}
                            onChange={this.handleSkillChange}/>
}
                        {type === 'Jack' && <FreeText
                            name="skill"
                            title="Skill"
                            value={selectedSkill}
                            onChange={this.handleSkillChange}/>
}

                        <MultipleChoice
                            name="abilities"
                            title="Abilities"
                            value={selectedAbilities}
                            url={this.url + 'abilities'}
                            allowMultiple={true}
                            numChoices={this.abilityChoices}
                            onChange={this.handleAbilityChange}/>
                            <div class="form-group row">
                            <div class="col-sm-10">
                                <button type="submit" class="btn btn-primary">Save Character</button>
                            </div>
                            </div>
                    </div>
                </div>
                </form>
            </div>
        );
    }
}
export default CharacterForm;