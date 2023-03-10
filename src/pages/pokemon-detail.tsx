import React from "react";

export class PokemonDetail extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
        //this.state={ name : this.props.params.name};
       // alert(name);
    }

    render() {
        return <h1>"Pokemon detail"</h1>;
    }
}
