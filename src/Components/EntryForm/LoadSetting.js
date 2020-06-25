import React, { Component } from 'react';
import {Form } from 'react-bootstrap';
import { ElectricContext } from '../Electrical/ElectricalContainer';

class LoadSetting extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {loadMargin, loadFactor, avgHours, powerFactor, formDataHandler} = context;
                return(
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group controlId="LoadMargin">
                                <Form.Label>Load Margin (%)</Form.Label>
                                <Form.Control type="number" min="0" value={loadMargin} name="loadMargin" onChange={formDataHandler} />
                            </Form.Group>
                            </div>
                        <div className="col-md-6">
                            <Form.Group controlId="LoadFactor">
                                <Form.Label>Load Factor</Form.Label>
                                <Form.Control type="number" min="0" step="0.1" max="1" value={loadFactor} name="loadFactor" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group controlId="QuantitySelect">
                                <Form.Label>Average Operation Hours</Form.Label>
                                <Form.Control type="number" min="0" max="24" value={avgHours} name="avgHours" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group controlId="PowerFactor">
                                <Form.Label>Power Factor</Form.Label>
                                <Form.Control type="number" min="0" step="0.1" max="1" value={powerFactor} name="powerFactor" onChange={formDataHandler} />
                            </Form.Group>
                        </div>                
                    </div>
                )
            }}
            </ElectricContext.Consumer>
        );
    }
}

export default LoadSetting;