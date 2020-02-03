import React, { Component } from 'react';

export default class Edit extends Component {
    render() {

    return (
    <div>
        <textarea className="form-control" id="editor" onChange={this.handleChange}>{this.state.userInput}</textarea>
    </div>
    );
}
}
