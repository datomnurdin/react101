import React from 'react';
import Joke from './Joke';
import JokesData from './jokesData';

function App(){

  const jokeComponents = JokesData.map( joke => 
    <Joke
      key={joke.id}
      question={joke.question}
      punchline={joke.punchline}
      />
    )

  return(
    <div>
      {jokeComponents}
    </div>
  )
}

export default App