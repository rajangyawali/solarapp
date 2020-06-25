import React, { Component } from 'react'
import { Table, Button, Form } from 'react-bootstrap'
import SvgFontIcons from 'react-svg-font-icons';
import { ElectricContext } from '../Electrical/ElectricalContainer';

export default class LoadUnknownForm extends Component {
    render() {
        return (
            <ElectricContext.Consumer>{(context)=>{
                const {items,hasItems,quantity,watt,hrs,formDataHandler,loadAddHandler,loadDeleteHandler}=context;
                let heading;
                if (hasItems) {
                    heading = <tr>
                        <th>Appliances</th>
                        <th>Qty</th>
                        <th>Watts</th>
                        <th>Hrs/Day</th>
                        <th>KWH</th>
                        <th></th>
                    </tr>
                }
                let appliances = items.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.appliance}</td>
                            <td>{item.quantity}</td>
                            <td>{item.watt}</td>
                            <td>{item.hrs}</td>
                            <td>{item.quantity * item.watt * item.hrs}</td>
                            <td><SvgFontIcons sets="fontAwesome" name="trash" fill="red" onClick={()=>loadDeleteHandler(item.id)}/></td>
                        </tr>
                    )
                })
                return(
                    <>
                    <div className="row">
                        <div className="col-md-3">
                            <Form.Group controlId="ApplianceSelect">
                                <Form.Label>Appliances</Form.Label>
                                <Form.Control as="select" name="appliance" onChange={formDataHandler}>
                                    <option value='Fan'>Fan</option>
                                    <option value='Oven'>Oven</option>
                                    <option value='Iron'>Iron</option>
                                    <option value='Lamp'>Lamp</option>
                                    <option value='Dryer'>Dryer</option>
                                    <option value='Cooler'>Cooler</option>
                                    <option value='Computer'>Computer</option>
                                    <option value='Television'>Television</option>
                                    <option value='Refrigerator'>Refrigerator</option>
                                    <option value='Rice Cooker'>Rice Cooker</option>
                                    <option value='Air Conditioner'>Air Conditioner</option>
                                    <option value='Washing Machine'>Washing Machine</option>
                                    <option value='Others'>Others</option>
                                </Form.Control>
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="QuantitySelect">
                                <Form.Label>Quantity</Form.Label>
                                <Form.Control type="number" min="0" value={quantity} name="quantity" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="WattSelect">
                                <Form.Label>Watts</Form.Label>
                                <Form.Control type="number" min="0" value={watt} name="watt" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                        <div className="col-md-3">
                            <Form.Group controlId="HoursSelect">
                                <Form.Label>Hours/Day</Form.Label>
                                <Form.Control type="number" min="0" max="24" value={hrs} name="hrs" onChange={formDataHandler} />
                            </Form.Group>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4 offset-9">
                            <Button variant="success" onClick={loadAddHandler}>
                                Add Load
                        </Button>
                        </div>
                    </div>
                    <br></br>
                    <div className="row">
                        <Table responsive>
                            <thead>
                                {heading}
                            </thead>
                            <tbody>
                                {appliances}
                            </tbody>
                        </Table>
                    </div>
                </>        
                )
            }}
            </ElectricContext.Consumer>
            )
    }
}
