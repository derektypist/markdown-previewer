import React, { Component } from 'react';
let marked = require('marked');

// Set Up Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: '# Welcome to my project.  \n The project...  \n## Sub Header \n[British Computer Society](https://www.bcs.org)  \nHere is some code.  To check status on GitHub use the command `git status`.  You can do other things in GitHub such as reset. \n  \nWriting Code in Python  \n```\nx = 4\ny = 2\nz = x + y\nprint(z)\n```  \nFavourite Celebrities  \n* Anna Richardson\n* Kate Garraway\n* Ruth Langsford\n* Susanna Reid\n\nYou can make text **bold** using two asterisks.  \nList Items can contain links  \n* [The National League](https://www.thenationalleague.org.uk)\n* [Cambridge Python User Group](https://www.meetup.com/CamPUG)\n\nThere are blockquotes\n> Thank you for your kind words\n\nImage Links  \n ![Google Logo](http://www.google.com/images/errors/logo_sm.gif)  \n## Computing  \n* Word Processing - include **Clipart Images, Headers and Footers** \n* Spreadsheets - include **Charts and Formula** \n* Presentations - include **Slide Layouts**'
    };
    
    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  
  // Update markdown on change of form
  updateMarkdown(event) {
    this.setState({markdown: event.target.value});
  }

  render() {
    let { markdown } = this.state;

    return (
      <div className="App container-fluid">
    <div>
    <h1 className="text-center">Markdown Previewer</h1>
    <label>Markdown Input</label>
    <textarea id="editor" rows="15" className="form-control" value={markdown} onChange={this.updateMarkdown}/>
    </div>
    <div>
    <h1>Markdown Output</h1>
    {/*Converts string version of html into actual html  */}
    <div id="preview" dangerouslySetInnerHTML= {{__html:marked(markdown)}}>
    </div>
    </div>
    </div>


    );





  }
}

export default App;
