import React, { Component }  from 'react'
import './HorizontalConnector.css'
import { ElectricContext } from '../Electrical/ElectricalContainer'


class LoadConnector extends Component {
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
                const {loadConnection,loadHasData,toggleLoadConnection} = context
                if (loadConnection){
                    if(loadHasData){
                        return(
                            <div className="horizontal-connector" onClick={toggleLoadConnection} style={{background:'green'}}>
                                <div className="horizontal-circle" style={{background:'green'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="horizontal-message" style={{color:'green'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div className="horizontal-connector" onClick={toggleLoadConnection} style={{background:'yellow'}}>
                                <div className="horizontal-circle" style={{background:'yellow'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                                <div className="horizontal-message" style={{color:'grey'}}><p>{this.state.message}</p></div>
                            </div>
                        )
                    }                    
                }
                else{
                    return(
                        <div className="horizontal-connector" onClick={toggleLoadConnection} style={{background:'red'}}>
                            <div className="horizontal-circle" style={{background:'red'}} onMouseEnter={this.statusHandler} onMouseLeave={this.statusDeHandler}></div>
                            <div className="horizontal-message" style={{color:'red'}}><p>{this.state.message}</p></div>
                        </div>
                    )
                }                
            }}
            </ElectricContext.Consumer>            
        );
    }
}

export default LoadConnector;
