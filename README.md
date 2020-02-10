# Markdown Previewer

Welcome to Markdown Previewer.  The purpose of this project is to have a functionality similar to this
https://codepen.io/freeCodeCamp/full/GrZVVO.

## UX

When the page first loads, the default text in the #editor field should be displayed. 
It should include the elements in the user stories.

### User Stories

I can see a textarea element with corresponding id="editor".

I can see an element with corresponding id="preview".

When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

When I enter GitHub flavoured markdown into the #editor element, the text is rendered as HTML in the #preview element.
Import the Marked Library at https://cdnjs.com/libraries/marked or use the command npm install marked (in-browser) or command-line npm install -g marked (CLI).

When my markdown previewer first loads, the default text in the #editor field should contain valid 
markdown that represents at least one of each of the 
following elements: a header (H1 size), a sub header (H2 size), a link, inline code, 
a code block, a list item, a blockquote, an image, and bolded text.

When my markdown previewer first loads, the default markdown 
in the #editor field should be rendered as HTML in the #preview element.

[Wireframes](wireframes/wireframe-markdown-previewer.PNG) are provided in the wireframes folder.

Examples of default text that can be used.

# My header

## My subheader

List Items

* Word Processing
* Databases
* Spreadsheets

Use the command `git status` to check that any changes have been added to commit.

Link

[National League in England](https://www.thenationalleague.org.uk)


Examples of default text that can be used.

# My header

## My subheader

List Items

* Word Processing
* Databases
* Spreadsheets

Use the command `git status` to check that any changes have been added to commit.

Link

[National League in England](https://www.thenationalleague.org.uk)

Examples of multi-line code - paragraph (p) set to Font Roboto and color of green.

```
<style>
p {
  font-family: "Roboto", Arial, Verdana, sans-serif;
  color: green;
}
</style>
```

List Items can include links.

Examples of multi-line code - paragraph (p) set to Font Roboto and color of green.

* [British Computer Society](https://www.bcs.org)
* [Cambridge Python User Group](https://www.meetup.com/CamPUG)


List Items can include links.

* [British Computer Society](https://www.bcs.org)
* [Cambridge Python User Group](https://www.meetup.com/CamPUG)

Blockquotes

> "Thank you for your kind words" - Daphne Pink

Make text in **bold** using two asterisks.

![Google Logo](http://www.google.com/images/errors/logo_sm.gif)


Example of Google Logo.

## Features

This project has an editor and a previewer.


> "Thank you for your kind words" - Daphne Pink

Make text in **bold** using two asterisks.

![Google Logo](http://www.google.com/images/errors/logo_sm.gif)


Example of Google Logo.

## Features

This project has an editor and a previewer.

## Technologies

This project uses the Marked Library - example below taken from https://marked.js.org/#/README.md#installation.  Accessed on
29 January 2020.

```
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    document.getElementById('content').innerHTML =
      marked('# Marked in the browser\n\nRendered by **marked**.');
  </script>
</body>
</html>

```

List Items can include links.

* [British Computer Society](https://www.bcs.org)
* [Cambridge Python User Group](https://www.meetup.com/CamPUG)

Blockquotes

> "Thank you for your kind words" - Daphne Pink

Make text in **bold** using two asterisks.

![Google Logo](http://www.google.com/images/errors/logo_sm.gif)


Example of Google Logo.

## Features

This project has an editor and a previewer.

## Technologies

This project uses the Marked Library - example below taken from https://marked.js.org/#/README.md#installation.  Accessed on
29 January 2020.

```
<!doctype html>
<html>
<head>
  <meta charset="utf-8"/>
  <title>Marked in the browser</title>
</head>
<body>
  <div id="content"></div>
  <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
  <script>
    document.getElementById('content').innerHTML =
      marked('# Marked in the browser\n\nRendered by **marked**.');
  </script>
</body>
</html>
```

This project also uses HTML5, CSS3, Google Fonts, React, Marked and Bootstrap 4.4.1.

## Testing

Ensure all user stories have been met.  If some or all have failed, go back and edit the code until all user stories have been met.

## Deployment

This project is deployed on [GitHub Pages](https://derektypist.github.io/markdown-previewer) using the master branch.

Remote Setup at git remote add origin https://github.com/derektypist/markdown-previewer

Go to the directory (my-markdown-previewer) by entering the command `cd my-markdown-previewer` and type `npm start` to
begin the development.

To create a production bundle, still in the directory of my-markdown-previewer, use the command `npm run build`

In package.json add "homepage": "https://derektypist.github.io/markdown-previewer".

Use the git push command to see any changes.

Still in my-markdown-previewer directory go to npm run deploy.  When asked, enter username and password.

## Credits

### Content

Written by me.

### Acknowledgements

Visited the GitHub page of [Dylan Israel](https://github.com/PizzaPokerGuy) for guidance of Markdown
Previewer.

Visited the W3Schools.com page for ideas on React.
