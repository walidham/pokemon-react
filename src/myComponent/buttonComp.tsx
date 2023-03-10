import React from "react";

export class ButtonComp extends React.Component<any,{isClicked:boolean}>{
    constructor(props:any){
        super(props);
        this.state = {isClicked:false};
    }

    buttonClick=()=>{
        alert("hi");
        this.setState({isClicked:true});
    }

    render() {
        return (
            <button onClick={this.buttonClick} >
                {this.state.isClicked? 'On':'OFF'}
            </button>
        );
    }
}
