import React, {Component} from 'react';
import Table from './Table'

function getDescription(name, type, focus, descriptor)
{
    return (type && focus && descriptor) && 
    <h4>{name && name + ", a"} {descriptor} {type} who {focus}</h4>
}

class CharacterDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const name = this.props.name;
        const type = this.props.type;
        const focus = this.props.focus;
        const descriptor = this.props.descriptor;
        return (
            <div>
                <div className="card">
                    <h4 className="card-header">Character Sheet</h4>
                    <div className="card-body">
                        <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                    {getDescription(name, type, focus, descriptor)}
                        <Table 
                            name="Statistics"
                            headers={['Stat', 'Pool', 'Edge']} 
                            items={[
                            ['Might', 12, 1],
                            ['Speed', 10, 1],
                            ['Intellect', 7, 0]]}>
                        </Table>
                        <Table name="Skills"
                            headers={['Skill', 'Level']} 
                            items={[
                            ['Swimming', 'Trained'],
                            ['Social Interactions', 'Inability'],
                            ]}>
                        </Table>
                        <Table name="Abilities"
                            headers={['Ability', 'Type', 'Cost']} 
                            items={[
                            ['Hedge Magic', 'Action', '1 Intellect'],
                            ['Practiced with Light Weapons', 'Enabler', ''],
                            ]}>
                        </Table>
                       
                    </div>
              
                </div>
            </div>
        );
    }
}

export default CharacterDescription;