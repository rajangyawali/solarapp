import React, { Component } from 'react';
import './EntryForm.css';
import { Modal, Button, Form } from 'react-bootstrap';
import { ElectricContext } from '../Electrical/ElectricalContainer';
import LoadKnownForm from './LoadKnownForm';
import LoadUnknownForm from './LoadUnknownForm';
import LoadSetting from './LoadSetting';


class LoadForm extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {loadShow, loadRequirementKnown, additionalLoadSetting, loadFormCloseHandler, formDataHandler, loadRequirementHandler,loadSettingsHandler} = context;
                let inputForm;
                if (loadRequirementKnown) {
                    inputForm = <LoadKnownForm />
                }
                else {
                    inputForm = <LoadUnknownForm />
                }
                let additionalLoadForm;
                if (additionalLoadSetting){
                    additionalLoadForm=<LoadSetting/>
                }
                return(
                    <Modal className="entry-form" show={loadShow} onHide={loadFormCloseHandler}>
                    <Modal.Header closeButton>
                        <Modal.Title>Load Data</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={this.props.submit}>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Check onClick={loadRequirementHandler}
                                        type="radio"
                                        label="I know my average power requirement"
                                        name="radioButton"
                                        id="abc"
                                        value="option1"
                                    />
                                    <Form.Check onClick={loadRequirementHandler}
                                        type="radio"
                                        label="I don't know my average power requirement"
                                        name="radioButton"
                                        id="abc2"
                                        value="option2"
                                    />
                                </Form.Group>
                                <Form.Group controlId="ControlSelect1">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <Form.Label>System Voltage</Form.Label>
                                            <Form.Control as="select" name="systemVoltage" onChange={formDataHandler}>
                                                <option value='220V AC'>220V AC</option>
                                                <option value='110V AC'>110V AC</option>
                                                <option value='12V DC'>12V DC</option>
                                                <option value='24V DC'>24V DC</option>
                                                <option value='48V DC'>48V DC</option>
                                                <option value='60V DC'>60V DC</option>
                                            </Form.Control>
                                        </div>
                                    </div>
                                </Form.Group>
                                {additionalLoadForm}
                                {inputForm}
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={loadFormCloseHandler}>
                                Close
                            </Button>
                            <Button variant="primary" onClick={loadSettingsHandler}>
                                Additional Settings
                            </Button>
                            <Button variant="success" onClick={loadFormCloseHandler} type="submit">
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

export default LoadForm;

