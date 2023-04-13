## create-vue

builds the scaffold for you

- `npm init vue@latest`

go into the folder created
- `npm install`
- `npm run dev`
    - starts the server

this app doesn't use the compiler in the browser. it precompiles it, saving the client from having to do that

## creating components

- install `Vue VSCode Snippets` extension
    - Sarah Drasner is the author!
- in a new vue file, start typing `vue` and the first one in the list is a snippet with template, script, and style tags


## loading components

Globally:
- main.js
    - import the file that contains the component
    - add the component to the vm object

Locally: [Recommended]
- can only be used in the component it's registered in
    - App.vue, in this case


## Styling

adding `scoped` to the style tag scopes the styling to just that component by marking the div and the style tag with a data hash

installing sass
- `npm install sass --save-dev`
- add `lang="scss"` to the style tag to point it to use sass compiler

## passing data between components

A (root) -> B  
|  
v  
C

send data down to child components. 
- Store shared data in parent component
- send it into the element in the template

mutating the data in the child component doesnt change anything in the parent component