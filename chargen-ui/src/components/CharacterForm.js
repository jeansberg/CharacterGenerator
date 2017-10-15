import React, { Component } from 'react';
import MultipleChoice from './MultipleChoice';
import FreeText from './FreeText';

class CharacterForm extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FreeText title="Name" name="Name" />
                <MultipleChoice title="Type" url={this.props.url + 'types'} />
                <MultipleChoice title="Descriptor" url={this.props.url + 'descriptors'} />
                <MultipleChoice title="Focus" url={this.props.url + 'foci'} />
            </div>
        );
    }
}
export default CharacterForm;