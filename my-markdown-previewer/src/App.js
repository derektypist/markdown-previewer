import React, { Component } from 'react';
let marked = require('marked');

// Set Up Component

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: `# Welcome to my project.
    The purpose of this project...
    ## Sub Header
    [British Computer Society](https://www.bcs.org)
    Here is some code - to check status on GitHub use the command \`git status\`.  You can also reset.
    Writing Code in Python
    \`\`\` x = 4
    y = 2
    z = x + y
    print(z)\`\`\`
    
    Favourite Celebrities
    * Anna Richardson
    * Kate Garraway
    * Ruth Langsford
    * Susanna Reid
    
    You can make text **bold** using two asterisks
    
    
    List Items can contain links
    * [The National League](https://www.thenationalleague.org.uk)
    * [Cambridge Python User Group](https://www.meetup.com/CamPUG)
    
    There are blockquotes > The purpose the BCS is to promote and advance the education and practice of computing for the benefit of the public.
    
    Image Links
    
    ![Google Logo](http://www.google.com/images/errors/logo_sm.gif)
    
    ## Computing
    
    * Word Processing - include **Clipart Images, Headders and Footers**
    * Spreadsheets - include **Charts and Formula**
    
    `
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
    <label>Markdown Input</label>
    <texarea id="editor" rows="10" className="form-control" value={markdown} onChange={this.updateMarkdown}/>
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
