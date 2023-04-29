import React from 'react'
import { useParams } from 'react-router-dom'

const WordAndColors = () => {
    
    const { word, textColor, bgColor } = useParams();
    
    return (
        <div>
            <h2>Welcome to the Word and Colors page!</h2>
            <h3 style={{backgroundColor: bgColor, padding:'10px' }}>
                Your word is: 
                "<span style={{color: textColor }}>{ word }</span>"
            </h3>
        </div>
    )
}

export default WordAndColors