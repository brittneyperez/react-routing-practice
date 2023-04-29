import React from 'react'
import { useParams } from 'react-router-dom'

const Word = () => {
    
    const { word } = useParams();
    
    return (
        <div>
            <h2>Welcome to the Hello page!</h2>
            <h3>Your word is: "{ word }"</h3>
        </div>
    )
}

export default Word