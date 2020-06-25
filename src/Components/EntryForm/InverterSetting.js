import React, { Component } from 'react';
import {Form } from 'react-bootstrap';
import { ElectricContext } from '../Electrical/ElectricalContainer';

class InverterSetting extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {inverterEfficiency, inverterSafetyMargin, surgeLoad, formDataHandler} = context;
                return(
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group controlId="InverterEfficiency">
                                <Form.Label>Inverter Efficiency (%)</Form.Label>
                                <Form.Control type="number"  min="50" max="99" value={inverterEfficiency} name="inverterEfficiency" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                        <div className="col-md-6">
                            <Form.Group controlId="InverterSafetyMargin">
                                <Form.Label>Inverter Safety Margin (%)</Form.Label>
                                <Form.Control type="number" min="0" max="30" value={inverterSafetyMargin} name="inverterSafetyMargin" onChange={formDataHandler}/>
                            </Form.Group>
                        </div> 
                        <div className="col-md-6">
                            <Form.Group controlId="SurgeLoad">
                                <Form.Label>Surge Load</Form.Label>
                                <Form.Control type="number" min="0" value={surgeLoad} name="surgeLoad" onChange={formDataHandler}/>
                            </Form.Group>
                        </div>               
                    </div>
                )
            }}
            </ElectricContext.Consumer>
        );
    }
}

export default InverterSetting;