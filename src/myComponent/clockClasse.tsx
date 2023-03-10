import React from "react";
interface clock{
    date:Date;
}
export class ClockClasse extends React.Component<any,clock>{
    constructor(props:any) {
        super(props);
        this.state = {date: new Date()};
    }

    componentDidMount() {
        setInterval(
            () => this.tick(),
            1000
        );
    }


    tick() {
        this.setState({      date: new Date()    });
    }
    render() {
        return (
            <div>
                <h1>Bonjour, monde !</h1>
                <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}
