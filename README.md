# Markdown Previewer

Welcome to Markdown Previewer.  The purpose of this project is to have a functionality similar to this
https://codepen.io/freeCodeCamp/full/GrZVVO.

## UX



### User Stories

I can see a textarea element with corresponding id="editor".

I can see an element with corresponding id="preview".

When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

When I enter GitHub flavoured markdown into the #editor element, the text is rendered as HTML in the #preview element.
Import the Marked Library at https://cdnjs.com/libraries/marked

When my markdown previewer first loads, the the default text in the #editor field should contain valid 
markdown that represents at least one of each of the 
following elements: a header (H1 size), a sub header (H2 size), a link, inline code, 
a code block, a list item, a blockquote, an image, and bolded text.

When my markdown previewer first loads, the default markdown 
in the #editor field should be rendered as HTML in the #preview element.

[Wireframes](wireframes/wireframe-markdown-previewer) are provided in the wireframes folder.

## Features



## Technologies

The Marked Library - example below taken from https://marked.js.org/#/README.md#installation.  Accessed on
29 January 2020.

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