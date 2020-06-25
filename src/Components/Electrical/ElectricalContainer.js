import React, { Component, createContext } from 'react'
import uuid from 'react-uuid'
import './ElectricalContainer.css'
import Equipment from './Equipment'
import Legend from './Legend'
import GridForm from '../EntryForm/GridForm'
import GridConnector from '../Connector/GridConnector'
import SolarForm from '../EntryForm/SolarForm'
import SolarConnector from '../Connector/SolarConnector'
import ControllerForm from '../EntryForm/ControllerForm'
import LoadForm from '../EntryForm/LoadForm'
import LoadConnector from '../Connector/LoadConnector'
import BatteryForm from '../EntryForm/BatteryForm'
import BatteryConnector from '../Connector/BatteryConnector'
import GridInfo from '../Info/GridInfo'


export const ElectricContext = createContext()

class ElectricalContainer extends Component {
    state = {
        gridShow:false,
        gridInfo:false,
        gridConnection:false,
        gridHasData:false,
        gridPowerPercentage:10,
        solarShow:false,
        solarConnection:false,
        solarHasData:false,
        region:'Kathmandu',
        controllerShow:false,
        controllerHasData:false,
        controllerEfficiency:90,
        controllerSafetyMargin:10,
        additionalInverterSetting:false,
        inverterEfficiency:90,
        inverterSafetyMargin:10,
        surgeLoad:10,
        loadShow:false,
        loadConnection:false,
        loadHasData:false,
        loadRequirementKnown: true,
        additionalLoadSetting:false,
        systemVoltage:"220V AC",
        loadMargin:10,
        loadFactor:0.5,
        avgHours:10,
        powerFactor:0.8,
        knownACLoad:10,
        knownACLoadUnit:"Wh/day",
        knownDCLoad:10,
        knownDCLoadUnit:"Wh/day",
        items: [],
        hasItems: false,
        id:uuid(),
        appliance: 'Fan',
        quantity: "1",
        watt: "500",
        hrs: "6",
        batteryShow:false,
        batteryConnection:false,
        batteryHasData:false,
        batteryEfficiency:90,
        batteryMargin:10,
        batteryVoltage:24,
        batteryDoD:1,
        batteryDoF:1,
    }

    formDataHandler = (event) =>{
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    gridFormOpenHandler = (props) =>{
        this.setState({
            gridShow:true
        })
    }

    gridFormCloseHandler = (props) => {
        this.setState({
            gridShow:false
        })
    }

    gridInfoOpenHandler = (props) =>{
        this.setState({
            gridInfo:true
        })
    }

    gridInfoCloseHandler = (props) => {
        this.setState({
            gridInfo:false
        })
    }

    gridSubmitHandler = (event) => {      
        this.setState({
            gridConnection:true,
            gridHasData:true
        })
        event.preventDefault();
    }

    toggleGridConnection = () =>{
        this.setState({
            gridConnection:!this.state.gridConnection
        })
    }

    solarFormOpenHandler = (props) =>{
        this.setState({
            solarShow:true
        })
    }
    
    solarFormCloseHandler = (props) => {
        this.setState({
            solarShow:false
        })
    }
    
    solarSubmitHandler = (event) => {      
        this.setState({
            solarConnection:true,
            solarHasData:true
        })
        event.preventDefault();
    }

    toggleSolarConnection = () =>{
        this.setState({
            solarConnection:!this.state.solarConnection
        })
    }

    controllerFormOpenHandler = (props) =>{
        this.setState({
            controllerShow:true
        })
    }
    
    controllerFormCloseHandler = (props) => {
        this.setState({
            controllerShow:false
        })
    }
    
    controllerSubmitHandler = (event) => {      
        this.setState({
            controllerHasData:true
        })
        event.preventDefault();
    }

    inverterSettingsHandler=(event) =>{
        this.setState({
            additionalInverterSetting:!this.state.additionalInverterSetting
        })
    }

    loadFormOpenHandler = (props) =>{
        this.setState({
            loadShow:true
        })
    }
    
    loadFormCloseHandler = (props) => {
        this.setState({
            loadShow:false
        })
    }
    
    loadSubmitHandler = (event) => {
        console.log(this.state.loadPowerPercentage);       
        this.setState({
            loadConnection:true,
            loadHasData:true
        })
        event.preventDefault();
    }

    toggleLoadConnection = () =>{
        this.setState({
            loadConnection:!this.state.loadConnection
        })
    }

    loadRequirementHandler = (event) => {
        let val = event.target.value;
        if (val === "option2") {
            this.setState({
                loadRequirementKnown: false
            })
        }
        else {
            this.setState({
                loadRequirementKnown: true
            })
        }
    }

    loadSettingsHandler=(event) =>{
        this.setState({
            additionalLoadSetting:!this.state.additionalLoadSetting
        })
    }

    loadAddHandler = (event) => {
        event.preventDefault()
        const newItem = {
            id:this.state.id,
            appliance: this.state.appliance,
            quantity: this.state.quantity,
            watt: this.state.watt,
            hrs: this.state.hrs,
        }
        const updatedItems = [...this.state.items, newItem]
        this.setState({  
            items: updatedItems,
            id:uuid(),
            appliance: this.state.appliance,
            quantity: "1",
            watt: "500",
            hrs: "6",
            hasItems: true,
        })
    }

    loadDeleteHandler = (id) => {
        const filteredItems = this.state.items.filter(item =>
            item.id !== id)
        this.setState({
            items: filteredItems
        })
    }

    batteryFormOpenHandler = (props) =>{
        this.setState({
            batteryShow:true
        })
    }
    
    batteryFormCloseHandler = (props) => {
        this.setState({
            batteryShow:false
        })
    }
    
    batterySubmitHandler = (event) => {      
        this.setState({
            batteryHasData:true,
            batteryConnection:true
        })
        event.preventDefault();
    }

    toggleBatteryConnection = () =>{
        this.setState({
            batteryConnection:!this.state.batteryConnection
        })
    }

    render() {               
            return (
                <ElectricContext.Provider value={{
                    ...this.state, 
                    formDataHandler:this.formDataHandler,
                    toggleGridConnection:this.toggleGridConnection,
                    gridFormCloseHandler:this.gridFormCloseHandler,
                    gridInfoCloseHandler:this.gridInfoCloseHandler,
                    toggleSolarConnection:this.toggleSolarConnection,
                    solarFormCloseHandler:this.solarFormCloseHandler,
                    controllerFormCloseHandler:this.controllerFormCloseHandler,
                    inverterSettingsHandler:this.inverterSettingsHandler,
                    toggleLoadConnection:this.toggleLoadConnection,
                    loadFormCloseHandler:this.loadFormCloseHandler,
                    loadRequirementHandler:this.loadRequirementHandler,
                    loadSettingsHandler:this.loadSettingsHandler,
                    loadAddHandler:this.loadAddHandler,
                    loadDeleteHandler:this.loadDeleteHandler,
                    toggleBatteryConnection:this.toggleBatteryConnection,
                    batteryFormCloseHandler:this.batteryFormCloseHandler,
                    }}>
                <div className="electrical-container"> 
                <div className="legend">
                    <Legend/>
                </div>
                <div className="top">
                    <Equipment title="Grid" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592986146/solarproject/electrical_grid_apqj7y.jpg" click={this.gridFormOpenHandler}/>
                    <GridForm submit={this.gridSubmitHandler}/>
                    <GridInfo/>
                </div>
                <div className="top">
                    <GridConnector status={this.state.gridConnection}/>
                </div>
                <div className="middle">
                    <Equipment title="Solar Panel" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/solar_loqsyg.jpg" click={this.solarFormOpenHandler}/>
                    <SolarForm submit={this.solarSubmitHandler}/>
                    <SolarConnector  status={this.state.solarConnection}/>
                    <Equipment title="Controller" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/chargecontroller_uroesf.jpg" click={this.controllerFormOpenHandler}/>
                    <ControllerForm submit={this.controllerSubmitHandler}/>
                    <LoadConnector  status={this.state.loadConnection}/>
                    <Equipment title="Load" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636459/solarproject/load_xynzrs.jpg" click={this.loadFormOpenHandler}/>
                    <LoadForm submit={this.loadSubmitHandler}/>
                </div> 
                <div className="top">
                    <BatteryConnector status={this.state.batteryConnection}/>
                </div>
                <div className="bottom">             
                    <Equipment title="Battery" image="https://res.cloudinary.com/rajangyawali/image/upload/v1592636460/solarproject/battery_g4btyj.jpg" click={this.batteryFormOpenHandler}/>
                    <BatteryForm submit={this.batterySubmitHandler}/>
                </div>
            </div>  
            </ElectricContext.Provider>    
        );
    }
}

export default ElectricalContainer;