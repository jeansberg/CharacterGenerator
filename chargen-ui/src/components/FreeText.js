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
            <div className="form-group row">
                    <label htmlFor={this.props.id} className="col-sm-2 col-form-label">{this.props.title}:</label>
                    <div className="col-sm-5"> 
                    <input type="text" className="col-sm-12" id={this.props.name} name={this.props.name} value={this.props.value} onChange={this.handleInputChange}/>
                    </div>
            </div>
        );
    }
}

export default FreeText;