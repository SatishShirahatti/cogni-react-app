import React, { Component } from 'react';
require('./floatlabel.scss');
// create a floating label input
export default class FloatingLabelInput extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: ""
        };

        this.handleInput = this.handleInput.bind(this);
    }

    handleInput(evt) {
        if (evt.target.value !== '') {
            this.setState({ className: "on" });
        }
        else {
            this.setState({ className: "" });
        }

        // run 
    }

    render() {
        return (
            <div className="floatingLabelInput">
                <label className={this.state.className}>{this.props.placeholder}</label>
                <input placeholder={this.props.placeholder} onChange={this.handleInput} />
            </div>
        );
    }

}


