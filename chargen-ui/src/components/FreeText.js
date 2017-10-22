import React, { Component } from 'react';

class FreeText extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(event) {
        this.props.onChange(event.target.name, event.target.value);
    }
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <input type="text" name={this.props.name} value={this.props.value} onChange={this.handleInputChange} />
            </div>
        );
    }
}

export default FreeText;