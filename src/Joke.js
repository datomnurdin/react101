import React from 'react'

function Joke(props){
    return(
        <div>
            <h3>Question: {props.question}</h3>
            <h3>Answer: {props.punchline}</h3>
            <hr/>
        </div>
    )
}

export default Joke