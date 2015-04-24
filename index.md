---
layout: page
title: Rapid prototyping with Gulp, Jekyll and Susy
---

This is a starter kit for creating prototypes in your browser very quickly. It is a combination of a number of brilliant projects smushed together, with additional stuff thrown in, then re-baked.

###Requirements
---

To get started, you'll need to have the following installed:

1. [NodeJS](http://nodejs.org) - You can use the installer, but I personally like using [Homebrew](http://blog.teamtreehouse.com/install-node-js-npm-mac)
2. [Bower](http://bower.io) - `npm install -g bower`
3. [GulpJS](http://gulpjs.com) - `npm install -g gulp`
4. [Jekyll](http://jekyllrb.com/) - `gem install jekyll`

###Getting started
---

- Clone this repository into your working directory.
- Navigate to the directory and run `npm install`. This will install the required node modules for the project.
- Also run `bower install`. This will install Susy for this project.

###Using the framework
---

- Run `gulp`. This will run the Gulp tasks needed for:
    -  compiling Sass, 
    -  concatenating Javascript, 
    -  serving the Jekyll site, 
    -  watch for changes to relevant folders and reload the browser accordingly.

###Acknowledgements
---

As mentioned above, this starter kit was based off a number of brilliant projects.

- [Live Wires](http://www.agnostic.io/livewires) by [Louder Than Ten](https://www.louderthanten.com/)
- [jekyll-gulp-sass-browser-sync](https://github.com/shakyShane/jekyll-gulp-sass-browser-sync) by [Shane Osbourne](http://shakyshane.com/)
- CSS architecture guided by [ITCSS](https://speakerdeck.com/dafed/managing-css-projects-with-itcss), brain-child of [Harry Roberts](http://csswizardry.com/)

---
*This is still a work-in-progress. Comments and suggestions are welcome.*
