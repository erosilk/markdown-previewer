import React, { Component } from 'react';

class UserTextField extends Component
{
    render() {
        return (
            <textarea className="userinput" onChange={this.props.userInput} value={this.props.inputValue}  />
        )
    }
}

export default UserTextField;