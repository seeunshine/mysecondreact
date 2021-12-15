import React from "react";

class Button extends React.Component{

    constructor(){
        super()
        this.state={
            count : 0
        }
    }

    addCounter = () => {
        this.setState(
            {
                count : this.state.count + 1
            }
        )
    }
 

    render(){
        return(
        <div>
            <button className="button1" onClick = {this.addCounter}>Click Me!!!</button>
            <p className = "count1">counts = {this.state.count}</p>
        </div>
        )
    }
}

export default Button;