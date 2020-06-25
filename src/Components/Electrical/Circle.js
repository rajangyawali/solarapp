import React from 'react'
import './Circle.css'

function Circle(props) {
    return (
    <div className="circle" style={{backgroundColor:props.color}}></div>
    )
}

export default Circle
