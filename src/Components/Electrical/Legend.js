import React from 'react'
import './Legend.css'
import Circle from './Circle'
import {Card} from 'react-bootstrap'

export default function Legend() {
    return (
        <Card className="legend-component">
            <Card.Body>
                <Card.Title className="legend-title">Legend</Card.Title>
                <Card.Text>
                    <div className="legend-circle">
                    <Circle color="red"/><div className="text">Not Connected</div>
                    </div>
                    <div className="legend-circle">
                    <Circle color="yellow"/><div className="text">No Data</div>
                    </div>
                    <div className="legend-circle">
                    <Circle color="green"/><div className="text">Connected</div>
                    </div>
                </Card.Text>
            </Card.Body>
                    
        </Card>
    )
}
