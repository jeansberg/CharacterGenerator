import React, { Component } from 'react';
import axios from 'axios';

class MultipleChoice extends Component {
    constructor(props) {
        super(props)
        this.state = { data: null };
        this.choices = [];
        this.loadChoicesFromServer = this.loadChoicesFromServer.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    loadChoicesFromServer() {
        axios.get(this.props.url)
            .then(res => {
                const choices = res.data;
                const items = choices.map((item) =>
                    <option key={item.name} value={item.id}>{item.name}</option>
                );
                this.setState({ items: items });
                this.props.onChange(this.props.name, this.state.items[0].key)
            })
    }
    componentDidMount() {
        this.loadChoicesFromServer();
    }
    handleInputChange(event) {
        this.props.onChange(event.target.name, event.target.value);
    }
    render() {
        return (
            <div className="form-group row">
                <label htmlFor={this.props.name} className="col-sm-2 col-form-label">{this.props.title}:</label>
                <div className="col-sm-5">
                    <select className="col-sm-12" name={this.props.name}
                        value={this.props.value}
                        multiple={this.props.allowMultiple}
                        onChange={this.handleInputChange}>
                        {this.state.items}
                    </select>
                </div>
                <small id={this.props.name+".helpText"} className="form-text text-muted">
                {this.props.helpText}
                </small>
            </div>
            );
    }
}

export default MultipleChoice;