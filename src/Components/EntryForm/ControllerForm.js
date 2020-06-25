import React, { Component} from 'react';
import './EntryForm.css'
import {Modal, Button, Form} from 'react-bootstrap'
import { ElectricContext } from '../Electrical/ElectricalContainer';
import InverterSetting from './InverterSetting'

class ControllerForm  extends Component {
    render(){
        return(
            <ElectricContext.Consumer>{(context)=>{
                const {controllerShow, controllerEfficiency, controllerSafetyMargin, formDataHandler, controllerFormCloseHandler, additionalInverterSetting, inverterSettingsHandler} = context;
                let additionalInverterForm;
                if (additionalInverterSetting){
                    additionalInverterForm=<InverterSetting/>
                }
                return(
                    <Modal className="entry-form" show={controllerShow} onHide={controllerFormCloseHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Controller Data</Modal.Title>
                    </Modal.Header>
                    <form  onSubmit={this.props.submit}>
                    <Modal.Body>                    
                    <Form>
                        <div className="row">
                            <div className="col-md-6">
                                <Form.Group controlId="ControllerEfficiency">
                                    <Form.Label>Controller Efficiency (%)</Form.Label>
                                    <Form.Control type="number" min="50" max="99" value={controllerEfficiency} name="controllerEfficiency" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                            <div className="col-md-6">
                                <Form.Group controlId="ControllerSafetyMargin">
                                    <Form.Label>Controller Safety Margin (%)</Form.Label>
                                    <Form.Control type="number" min="0" max="30" value={controllerSafetyMargin} name="controllerSafetyMargin" onChange={formDataHandler}/>
                                </Form.Group>
                            </div>
                        </div>
                        {additionalInverterForm}                   
                    </Form>                
                    </Modal.Body>
                    <Modal.Footer>                    
                    <Button variant="danger" onClick={controllerFormCloseHandler}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={inverterSettingsHandler} >
                        Inverter Settings
                    </Button>
                    <Button variant="success" onClick={controllerFormCloseHandler} type="submit">
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

export default ControllerForm;

