import React from "react";
import "./components_scss/_App.scss";
import Greatings from "./components/Greatings";
import Navbar from "./components/Navbar";
import Counter from "./components/Counter";
import Calculator from "./components/Calculator";



function App(props) {
    return (
        <div id="main-container">
            <Navbar />
            <Greatings name="irene" />
            <Counter />
            <Calculator />


        </div>



    )
}

export default App;