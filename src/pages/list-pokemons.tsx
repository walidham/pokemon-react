import React from "react";
import TablePagination from "../myComponent/TablePagination";
import logo from "../logo.svg";
import PokemonTable from "../myComponent/TablePagination";

export class ListPokemons extends React.Component<any, any>{

    constructor(props:any) {
        super(props);
    }

    render() {
        return <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <PokemonTable />
            </header>
        </div>;
    }
}
