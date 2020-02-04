import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
let marked = require('marked');

// Set Up Component

class App extends Component {
  state = {
    markdown: `# Welcome to my project.
    The purpose of this project...
    ## Sub Header
    [British Computer Society](https://www.bcs.org)
    Here is some code \`<i class&quot;fa fa-music&quot; aria-hidden=&quot;true&quot;></i>\`.To get the music icon using Font Awesome 4.7.0.
    Writing an Internal Style Sheet
    \`\`\` &lt;style&gt; p {font-family: &quot;Roboto&quot;, Arial, Verdana, sans-serif&semi;color: green&semi;}&lt;/style&gt;\`\`\`
    
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
  }
}


export default App;
