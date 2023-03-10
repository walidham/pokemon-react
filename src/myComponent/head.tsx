import React from "react";

export interface Menu{
    name:string,
    age:number
}
export class Welcome extends React.Component<Menu> {
    constructor(props:Menu) {
        super(props);
    }
    render() {
        return <h1>Bonjour, {this.props.name}</h1>;
    }
}
