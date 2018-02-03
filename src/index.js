import React from 'react'
import ReactDOM from 'react-dom'
import Hello from './App'
// import registerServiceWorker from './registerServiceWorker';

var person = {
  personName: "Super Guy",
  personAge: 124,
  favourites: [
    " Falaffal",
    " Gurdenfraug",
    " Dandilions",
    " Mucous Membranes"
  ]
}

ReactDOM.render(
  <Hello
  name = {person.personName}
  age = {person.personAge}
  favourites = {person.favourites}/>,
  document.getElementById('root')
)
// registerServiceWorker();
