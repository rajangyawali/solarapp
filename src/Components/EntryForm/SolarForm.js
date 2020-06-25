import React, { Component} from 'react';
import './EntryForm.css'
import {Modal, Button, Form} from 'react-bootstrap'
import { ElectricContext } from '../Electrical/ElectricalContainer';


class SolarForm  extends Component {
    state={
        region:['Bharatpur','Biratnagar','Birganj','Butwal',
                'Dharan','Janakpur','Kathmandu','Lalitpur',
                'Mahendranagar','Pokhara']
    }
    render(){
        return(
        <ElectricContext.Consumer>{(context)=>{
            const {solarShow, region, solarFormCloseHandler, formDataHandler} = context;
            return(
                <Modal className="entry-form" show={solarShow} onHide={solarFormCloseHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Solar Data</Modal.Title>
                    </Modal.Header>
                    <form  onSubmit={this.props.submit}>
                    <Modal.Body>                    
                    <Form>
                        <Form.Group controlId="Solar">
                            <Form.Label>Select your nearby region</Form.Label>
                            <Form.Control type="text" name="region" value={region} onChange={formDataHandler}/>
                        </Form.Group>
                    </Form>                
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={solarFormCloseHandler}>
                        Close
                    </Button>
                    <Button variant="success" onClick={solarFormCloseHandler} type="submit">
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

export default SolarForm;

