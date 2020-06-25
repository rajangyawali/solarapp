import React from 'react'
import './Equipment.css'
import {Card} from 'react-bootstrap'


export default function Equipment(props) {
    
    return (
        <Card className="electrical-component" onDoubleClick={props.click}>
            <Card.Img className="image" variant="top" src={props.image}/>
            <Card.Body>
                <Card.Title className="title">{props.title}</Card.Title>
                <Card.Text>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

