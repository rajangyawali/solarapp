import React, { Component } from 'react';
import './Info.css'
import { Modal, Button} from 'react-bootstrap';
import { ElectricContext } from '../Electrical/ElectricalContainer';

class GridInfo extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {gridInfo,gridInfoCloseHandler,gridPowerPercentage} = context;
                return(
                    <Modal show={gridInfo} onHide={gridInfoCloseHandler}>
                        <Modal.Header closeButton>
                        <Modal.Title>Grid Info</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <p>Grid Power Percentage: {gridPowerPercentage}</p>
                        </Modal.Body>
                    </Modal>
                )
            }}                
            </ElectricContext.Consumer>
        );
    }
}

export default GridInfo;