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
            <div>
                <p>{this.props.title}</p>
                <select name={this.props.name}
                    value={this.props.value}
                    multiple={this.props.allowMultiple}
                    onChange={this.handleInputChange}>
                    {this.state.items}
                </select>
            </div>);
    }
}

export default MultipleChoice;