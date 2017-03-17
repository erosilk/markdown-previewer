import React, { Component } from 'react';

class UserTextField extends Component
{
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",

        }
    }

    userInput(event) {
        this.setState({
            inputValue: event.target.value
    })
    }

    render() {

        return (
            <textarea />
        )
    }
}

export default UserTextField;