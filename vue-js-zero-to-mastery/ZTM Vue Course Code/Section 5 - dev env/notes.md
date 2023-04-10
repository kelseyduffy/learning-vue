## tools

Vite
- module builder
- lets you optimize, compress, minimize codebase
    - lets you build with splitting into multiple files
    - lets users only download a smaller number of files
- vite is extendable
- creator of vite is creator of vue
- creation steps:
    - `npm create vite@latest`
    - select vanilla js
    - enter the new directory
    - `npm install`
- usage steps:
    - `npm run dev`     // dev is the name of a script in package.json > scripts
        - output url can be visited to see the page
    - `npm run build`   // creates the build output
        - `dist` folder created 
    - `npm run preview` // lets you run the website from the dist folder


SASS
- programming language for css
- extends css because css has no programming features
- sass is compiled into css so the browser can undersand it
- usage (from vite project folder)
    - `npm install sass`
    - rename `style.css` to `style.scss`
- docs: 
    - [sass](https://sass-lang.com/)
    - [sass color](https://sass-lang.com/documentation/modules/color)


PostCSS
- post processor for css
    - it starts as css, then you can make changes to it with javascript, and it will compile it back into css
- installed/configured already by vite
- use it by adding a file named `postcss.config.cjs`
- example:
    - `::placeholder` tag in css needs to be prefixed in older browsers
    - `autoprefixer` library will scan for unprefixed items and add the prefix for them
    - adding it into the sass file will generate the css with the `::placeholder` value
    - postcss will post process this file and add the prefix because we `required` that library in the postcss.config.cjs
    - actual css that the browser is executing against will have both the `::placeholder` tag and a new `::-moz-placeholder` tag with the mozilla prefix
- docs: 
    - [postcss](https://github.com/postcss/postcss)
    - [postcss parts](https://www.postcss.parts/)


ESLint
- enforces styling, such as using single quotes or double quotes
- js is very open ended, so it's helpful to use a styling tool to enforce some style rules
- not supported by vite automatically
    - `npm install vite-plugin-eslint --save-dev --force` will add this support
- create file called `vite.config.js` to add eslint to the vite instance
- create file called `.eslintrc` to define the rules
    - define the rules, environment, etc
- install the `ESLint` extension to VS code
    - now red lines will appear by errors
- add a package.json script that autofixes errors:
    - `"lint": "eslint main.js --fix"`
- docs: 
    - [eslint](https://eslint.org/)
    - [eslint rules](https://eslint.org/docs/latest/rules/)


webpack
- can use this instead of vite
- only js code is supported
- more handson, has a higher learning curve
- using it:
    - `npm install` from the sample webpack directly to install the dependencies
    - `npm run start` will execute `webpack --mode=development` 
    - creates the `dist` folder with the bundled js and css files

required background:
- ES6
    - arrow functions
    - constants, let variables
    - modules