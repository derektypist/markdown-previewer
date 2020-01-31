# Markdown Previewer

Welcome to Markdown Previewer.  The purpose of this project is to have a functionality similar to this
https://codepen.io/freeCodeCamp/full/GrZVVO.

## UX

When the page first loads, the default text in the #editor field should be displayed.

An example of how to set default text in the textarea element is shown below.

```
<textarea>
<h1>My Project Title</h1>
<p>Welcome to my project title</p>
<h2>UX</h2>
<a href="https://www.bcs.org" target="_blank" title="British Computer Society">
British Computer Society</a>
<p>Access the music icon <code>&lt;i class="fa fa-music" aria-hidden="true"&gt;&lt;/i&gt;</code>
on Font Awesome 4.7.0</p>
<code>/* This is a multi-line comment in JavaScript
      Define a function that adds 2
      */
}
</code>
<ul>
<li>Anna Richardson</li>
<li>Kate Garraway</li>
<li>Ruth Langsford</li>
<li>Susanna Reid</li>
</ul>
<blockquote cite="https://www.bcs.org">The purpose of the BCS is to promote and
advance the education and practice of computing
for the benefit of the public.
</blockquote>
<img src="ely-cathedral.JPG" alt="Ely Cathedral" />
<b>Here is some bold text</b>
</textarea>
```

### User Stories

I can see a textarea element with corresponding id="editor".

I can see an element with corresponding id="preview".

When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.

When I enter GitHub flavoured markdown into the #editor element, the text is rendered as HTML in the #preview element.
Import the Marked Library at https://cdnjs.com/libraries/marked

When my markdown previewer first loads, the default text in the #editor field should contain valid 
markdown that represents at least one of each of the 
following elements: a header (H1 size), a sub header (H2 size), a link, inline code, 
a code block, a list item, a blockquote, an image, and bolded text.

When my markdown previewer first loads, the default markdown 
in the #editor field should be rendered as HTML in the #preview element.

[Wireframes](wireframes/wireframe-markdown-previewer) are provided in the wireframes folder.



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

This project uses jQuery 3.4.1 at 
```
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
</script>
```

This project also uses HTML5, CSS3, Google Fonts and Bootstrap 4.4.1.

## Credits

### Acknowledgements

At https://marked.js.org/#/USING_PRO.md#renderer