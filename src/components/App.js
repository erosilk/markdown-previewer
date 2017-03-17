import React, { Component } from 'react';
import UserTextField from './UserTextField'
import FormattedText from './FormattedText'
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.userInput = this.userInput.bind(this)
    this.state = {
        inputValue: "",
    }
  }

  userInput(event) {
        this.setState({
            inputValue: event.target.value
  })
}

processInput(){

}

  render() {
    return (
      <div className="window">
      
        <UserTextField userInput={this.userInput} inputValue={this.state.inputValue}/>
        <FormattedText UserTextField={this.state.inputValue} />
      </div>
    );
  }
}

export default App;
