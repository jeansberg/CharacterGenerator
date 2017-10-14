import React, {Component} from 'react';
import MultipleChoice from './MultipleChoice';
import FreeText from './FreeText';

class CharacterForm extends Component {
    constructor(props)
    {
        super(props);
    }

    render()
    {
        return (
            <div>
                <FreeText title="Name" name="Name"/>
                <MultipleChoice title="Skills" url={this.props.url + 'skills'}/>
            </div>
        );
    }
}
export default CharacterForm;