import React from "react";
import {NamedAPIResource, PokemonClient} from "pokenode-ts";

interface PokemonRow {
    data: NamedAPIResource[],
    rowsPerPage: number
}

class PokemonTable extends React.Component<any, any> {

    value='';
    constructor(props: PokemonRow) {
        super(props);
        this.state = {
            rowsPerPage: 20,
            currentPage: 0,
            data: [],
            totalPages: 0,
            currentData:[]
        };

    }


    componentDidMount() {
        this.getData();
    }

    getData = () => {
        (async () => {
            const api = new PokemonClient();

            await api
                .listPokemons(0, 100000)
                .then((data) => {
                    this.setState(
                        {
                            data: data.results,
                            currentData:data.results,
                            totalPages: Math.ceil(data.results.length / this.state.rowsPerPage)
                        });
                        this.nextPage();
                })
                .catch((error) => console.error(error));
        })();
    }

    nextPage = () => {
        this.setState({currentPage: this.state.currentPage + 1},()=>{
            const startIndex = (this.state.currentPage - 1) * this.state.rowsPerPage;
            const endIndex = startIndex + this.state.rowsPerPage;
            // this.getData();
            const currentData = this.state.currentData.slice(startIndex, endIndex);
            this.setState({currentData:currentData,
                startIndex, endIndex});
        });

    }

    previewPage = () => {
        this.setState({currentPage: this.state.currentPage - 1},()=>{
            const startIndex = (this.state.currentPage - 1) * this.state.rowsPerPage;
            const endIndex = startIndex + this.state.rowsPerPage;
            // this.getData();
            const currentData = this.state.currentData.slice(startIndex, endIndex);
            this.setState({currentData:currentData});
        });
    }

    search = (e: React.ChangeEvent<HTMLInputElement>)=>{
        this.setState({
            currentPage: 0,
            currentData:[]
        },()=>{
            if(e.target.value===""){
               // alert("vide")

                this.setState({
                    currentData:this.state.data,
                    totalPages: Math.ceil(this.state.data.length / this.state.rowsPerPage)
                },()=>{
                    this.nextPage();
                })

            }
            let table = this.state.data.filter((el:NamedAPIResource)=>{
                return el.name.indexOf(e.target.value)>-1;
            })

            this.setState({
                currentData:table,
                totalPages: Math.ceil(table.length / this.state.rowsPerPage)
            },()=>{
                this.nextPage();
            })


        });

    }
    render() {
       return (<div>
           <h1>List Of Pokemons</h1>
           <div>
               <input className={'App-link'}
                     defaultValue={this.value}
                      type={"text"}
                      id={'searchValue'}
                      onChange={event => this.search(event)}/>
               <br/>
           </div>
            <table border={1}>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Detail</th>
                </tr>
                </thead>
                <tbody>
                {this.state.currentData.map((item: NamedAPIResource) => (
                    <tr key={item.name}>
                        <td>{item.name}</td>
                        <td><a href={'pokemon/'+item.name}> View</a></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <div>
                <button onClick={this.previewPage} disabled={this.state.currentPage === 1}>
                    Previous
                </button>
                <span>Page {this.state.currentPage} of {this.state.totalPages}</span>
                <button onClick={this.nextPage} disabled={this.state.currentPage === this.state.totalPages}>
                    Next
                </button>
            </div>
        </div>);
    }
}

export default PokemonTable;
