import React, { Component} from 'react';
import './EntryForm.css'
import {Modal, Button, Form} from 'react-bootstrap'
import { ElectricContext } from '../Electrical/ElectricalContainer';


class GridForm  extends Component {
    render(){
        return(
        <ElectricContext.Consumer>{(context)=>{
            const {gridPowerPercentage, gridShow, gridFormCloseHandler, formDataHandler} = context;
            return(
                <Modal className="entry-form" show={gridShow} onHide={gridFormCloseHandler}>
                    <Modal.Header closeButton>
                    <Modal.Title>Grid Data</Modal.Title>
                    </Modal.Header>
                    <form  onSubmit={this.props.submit}>
                    <Modal.Body>                    
                    <Form>
                        <Form.Group controlId="PercentagePower">
                            <Form.Label>% Power to be repalced by renewable source</Form.Label>
                            <Form.Control type="number" min="0" max="100" value={gridPowerPercentage} name="gridPowerPercentage" onChange={formDataHandler}/>
                        </Form.Group>
                    </Form>                
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="danger" onClick={gridFormCloseHandler}>
                        Close
                    </Button>
                    <Button variant="success" onClick={gridFormCloseHandler} type="submit">
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

export default GridForm;

