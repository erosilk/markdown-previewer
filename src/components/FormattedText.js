import React, { Component } from 'react'


class FormattedText extends Component 
{
    constructor(props) {
        super(props)
        this.textSource = <h1>Hola</h1>;
        this.state = {
        }
    }


    render() {
        return (

            <div> {this.textSource} </div>

        )
    }
}

export default FormattedText;