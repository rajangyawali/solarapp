import React, { Component} from 'react';
import './EntryForm.css'
import {Modal, Button, Form} from 'react-bootstrap'
import { ElectricContext } from '../Electrical/ElectricalContainer';


class BatteryForm  extends Component {
    render(){
        return(
        <ElectricContext.Consumer>{(context)=>{
            const {batteryShow,batteryEfficiency,batteryMargin,batteryVoltage,batteryDoD,batteryDoF, batteryFormCloseHandler, formDataHandler} = context;
            return(
                <Modal className="entry-form" show={batteryShow} onHide={batteryFormCloseHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Battery Data</Modal.Title>
                    </Modal.Header>
                    <form  onSubmit={this.props.submit}>
                    <Modal.Body>                    
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="BatteryEfficiency">
                                    <Form.Label>Battery Efficiency (%)</Form.Label>
                                    <Form.Control type="number" min="0" max="90" value={batteryEfficiency} name="batteryEfficiency" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="BatteryVoltage">
                                    <Form.Label>Battery Voltage System</Form.Label>
                                    <Form.Control type="number" min="0" max="90" value={batteryVoltage} name="batteryVoltage" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="BatteryDoD">
                                    <Form.Label>Allowable Depth of Discharge</Form.Label>
                                    <Form.Control type="number" min="0" max="90" value={batteryDoD} name="batteryDoD" onChange={formDataHandler}/>
                                </Form.Group>                        
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="BatteryDoF">
                                    <Form.Label>Required Degree of Freedom</Form.Label>
                                    <Form.Control type="number" min="0" max="90" value={batteryDoF} name="batteryDoF" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-12">
                                <Form.Group controlId="BatteryMargin">
                                    <Form.Label>Margin for Capacity Loss on Time</Form.Label>
                                    <Form.Control type="number" min="0" max="90" value={batteryMargin} name="batteryMargin" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                        </div> 
                    </Form>                
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={batteryFormCloseHandler}>
                        Close
                    </Button>
                    <Button variant="success" onClick={batteryFormCloseHandler} type="submit">
                        Save Changes
                    </Button>               
                    </Modal.Footer>
                    </form>
                </Modal>
            )
        }}
        </ElectricContext.Consumer>            
        )                        
    }
}

export default BatteryForm;

