import React from 'react';

export default class Editor extends React.Component {
    render() {

    return (
    <div>
        <textarea className="form-control" id="editor" onChange={this.handleChange}>{this.state.userInput}</textarea>
    </div>
    );
}
}
