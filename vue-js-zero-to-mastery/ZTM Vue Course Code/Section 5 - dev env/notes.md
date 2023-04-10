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

Webpack


PostCSS


SASS
- programming language for css
- extends css because css has no programming features
- sass is compiled into css so the browser can undersand it
- usage (from vite project folder)
    - `npm install sass`
    - rename `style.css` to `style.scss`

ESLint


required background:
- ES6
    - arrow functions
    - constants, let variables
    - modules