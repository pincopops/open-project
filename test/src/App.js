import React from "react";
import "./components_scss/_App.scss";
import Greatings from "./components/Greatings";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";
import List from "./components/List";



function App(props) {
    return (
        <>
            <div id="main-container">
                <Navbar />
                <Greatings name="Elio" />
                <Counter />
                <List />


            </div>
        </>
    )
}

export default App;


