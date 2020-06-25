import React, { Component }  from 'react'
import './VerticalConnector.css'
import { ElectricContext } from '../Electrical/ElectricalContainer'

class GridConnector extends Component {
    state = {
        message : '',
    }
    statusHandler = (event, props) =>{
        let {status} = this.props
        if (status === true){
            this.setState({
                message:'Connected',
            })
        }else{
            this.setState({
                message:'Not Connected',
            })
        }
    }
    statusDeHandler = (event, props) =>{
            this.setState({message:''})
    }
    render() {
        return (
            <ElectricContext.Consumer>{(context) =>{
                const {gridConnection,gridHasData,toggleGridConnection} = context
                if (gridConnection){
                    if(gridHasData){
                        return(
                            <div className="vertical-connector" onClick={toggleGridConnection} style={{background:'green'}}>
                                <div className="vertical-circle" style={{background:'green'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="vertical-message" style={{color:'green'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="vertical-connector" onClick={toggleGridConnection} style={{background:'yellow'}}>
                                <div className="vertical-circle" style={{background:'yellow'}} onMouseOver={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="vertical-message" style={{color:'grey'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }                    
                }
                else{
                    return(
                        <div className="vertical-connector" onClick={toggleGridConnection} style={{background:'red'}}>
                            <div className="vertical-circle" style={{background:'red'}} onMouseOver={this.statusHandler}  onMouseLeave={this.statusDeHandler}></div>
                            <div className="vertical-message" style={{color:'red'}}><p>{this.state.message}</p></div>
                        </div>
                    )
                }                
            }}
            </ElectricContext.Consumer>             
        );
    }
}

export default GridConnector;

