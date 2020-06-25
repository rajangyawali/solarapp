import React, { Component } from 'react';
import {Form} from 'react-bootstrap';
import { ElectricContext } from '../Electrical/ElectricalContainer';

class LoadKnownForm extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {knownACLoad,knownACLoadUnit,knownDCLoad,knownDCLoadUnit, formDataHandler}=context;
                return(
                    <>
                    <div className="row">
                    <div className="col-md-6">
                    <Form.Group controlId="TotalACLoad">
                        <Form.Label>Total AC Load</Form.Label>
                        <Form.Control type="number" min="0" value={knownACLoad} placeholder="Enter your AC Load" name="knownACLoad" onChange={formDataHandler}/>
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group controlId="ACLoadUnit">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control as="select" name="knownACLoadUnit" value={knownACLoadUnit} onChange={formDataHandler}>
                        <option value='Wh/day'>Wh/day</option>
                        <option value='KWh/month'>KWh/month</option>
                        </Form.Control>
                    </Form.Group>
                    </div>
                    </div>
                    <div className="row">
                    <div className="col-md-6">
                    <Form.Group controlId="TotalDCLoad">
                        <Form.Label>Total DC Load</Form.Label>
                        <Form.Control type="number" min="0" value={knownDCLoad} placeholder="Enter your DC Load" name="knownDCLoad" onChange={formDataHandler}/>
                    </Form.Group>
                    </div>
                    <div className="col-md-6">
                    <Form.Group controlId="DCLoadUnit">
                        <Form.Label>Unit</Form.Label>
                        <Form.Control as="select" name="knownDCLoadUnit" value={knownDCLoadUnit} onChange={formDataHandler}>
                        <option value='Wh/day'>Wh/day</option>
                        <option value='KWh/month'>KWh/month</option>
                        </Form.Control>
                    </Form.Group>
                    </div>
                    </div>
                    </>
                )
            }}
            </ElectricContext.Consumer>
        );
    }
}

export default LoadKnownForm;