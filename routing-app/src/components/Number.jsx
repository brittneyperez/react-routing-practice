import React from 'react'
import { useParams } from 'react-router-dom'

const Number = () => {
    
    const { number } = useParams();
    
    return (
        <div>
            <h2>Welcome to the Number Page!</h2>
            <h3>Your number is: <strong>{ number }</strong></h3>
        </div>
    )
}

export default Number