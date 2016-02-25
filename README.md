# UI Prototypes
An environment to create UI prototypes with HTML and SCSS.

## Installation

This repository requires Node versions >= 0.12.7 or Node 4.x and npm 2.x.

To get started run `npm i` and then `npm start`, which runs Gulp and watches for changes in SCSS files.

## Files and Folders

Please add new SCSS code in the `/scss` folder. Gulp will compile `.scss` files here and move them to `/styles/*.css`. In `index.html`, you can add link tags to reference new files. Please do not remove the `base.css` file, as this includes our reset CSS and style guide CSS.
