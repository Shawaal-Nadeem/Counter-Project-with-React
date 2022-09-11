import React,{Component} from "react";
class counter extends Component{
constructor(){
    super();
    this.state={
        number:0
    }
}

Increment(){
this.setState({
    number:this.state.number+1
});
}

Decrement(){
    if(this.state.number>0)
    {
    this.setState({
        number:this.state.number-1
    });
    }
}

    reset(){
        this.setState({
            number:0
        });
    }
render(){
    return(
        <div id="main">
            <h1 id="heading">Counter</h1>
            <h2 id="num">{this.state.number}</h2>
            <div className="btn">
            <button id="add-btn" onClick={() => this.Increment()}>Increase</button>
            <button id="res-btn" onClick={() => this.reset()}>Reset</button>
            <button id="sub-btn" onClick={() => this.Decrement()}>Decrease</button>
            </div>
        </div>
    )
}
}
export default counter;