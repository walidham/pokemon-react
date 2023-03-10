import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Welcome} from './myComponent/head';
import ReactDOM from "react-dom";
import {Clock} from "./myComponent/clock";
import {ClockClasse} from "./myComponent/clockClasse";
import {ButtonComp} from "./myComponent/buttonComp";
import {createRoot, Root} from 'react-dom/client';
import PokemonTable from "./myComponent/TablePagination";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/layout";
import {ListPokemons} from "./pages/list-pokemons";
import {PokemonDetail} from "./pages/pokemon-detail";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<ListPokemons />} />
                    <Route path="pokemon/:name" element={<PokemonDetail />} />
                </Route>
            </Routes>
        </BrowserRouter>


    );
}

export default App;
