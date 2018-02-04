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

var post = {
  postTitle: "Galactizarauz",
  postAuthor: "Dinotron",
  postBody: "What do you do when faced with a life crisis you don't have the CPU to compute?",
  postComments: [
    " Blew my MIND!!",
    " I never thought I could relate so much to a robotic dinosaur.",
    " The ending where Triceratops killed his father to validate his inner worth could have been executed better"
  ]
}


ReactDOM.render(
  <Hello
  name = {person.personName}
  age = {post.postTitle}
  favourites = {person.favourites}/>,
  document.getElementById('root')
)
// registerServiceWorker();
