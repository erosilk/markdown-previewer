import React, { Component } from 'react';
//import './FormattedText.css';

let commonmark = require('commonmark');
let reader = new commonmark.Parser();
let writer = new commonmark.HtmlRenderer();


class FormattedText extends Component 
{
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {

        let parsed = reader.parse(this.props.UserTextField);
        let result = writer.render(parsed);

        return (
            <div className="formattedtext" dangerouslySetInnerHTML={{__html: result}} />
        )
    }
}

export default FormattedText;