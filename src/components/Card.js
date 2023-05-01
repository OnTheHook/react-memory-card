
import React, { useState, useEffect } from "react"


export const Card = props => {
    
    
    const checkScore = () => {
        if (!props.clicked ) {
            props.toggleClicked()
            props.increaseScore()
        } else {
            props.resetClicked()
            props.resetScore();
        }
    }

    return (
        <div onClick={checkScore} className="card">
            {props.num}
        </div>
    )
}