import React, { Component } from 'react';

class CharacterDescription extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const name = this.props.name;
        const type = this.props.type;
        const focus = this.props.focus;
        const descriptor = this.props.descriptor;
        return (<div>You are {name || "someone"}, {descriptor} {type} who {focus}</div>);
    }
}

export default CharacterDescription;