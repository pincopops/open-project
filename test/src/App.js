import React from "react";
import "./components_scss/_App.scss";
import Greatings from "./components/Greatings";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";


function App(props) {
    return (
        <div id="main-container">
            <Navbar />
            <Greatings name="Elio" />
            <Counter />


        </div>



    )
}

export default App;