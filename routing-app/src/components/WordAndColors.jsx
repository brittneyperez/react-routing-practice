import React from 'react'
import { useParams } from 'react-router-dom'

const WordAndColors = () => {
    
    const { word, textColor, bgColor } = useParams();
    
    return (
        <div>
            <h2>Welcome to the Word and Colors page!</h2>
            { isNaN(word) ? 
                <h3 style={ bgColor ? {backgroundColor: bgColor} : null }>
                    Your word is: "
                    <span style={ textColor ? {color: textColor} : null}>
                        { word }
                    </span>
                    "
                </h3>
                :
                <h3>Your word is the number: { word }</h3> }
            
            {/* <h3 style={{backgroundColor: bgColor, padding:'10px' }}>
                Your word is: 
                <span style={{color: textColor }}>{ word }</span>"
            </h3> */}
        </div>
    )
}

export default WordAndColors