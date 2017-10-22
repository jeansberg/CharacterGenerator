import React, {Component} from 'react';

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
                        <h6 className="card-subtitle mb-2 text-muted"> </h6>
                   {<h4>{name && name + ", a"} {descriptor} {type} who {focus}</h4>}
                    </div>
                </div>
            </div>
        );
    }
}

export default CharacterDescription;