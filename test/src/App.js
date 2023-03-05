import React from "react";
import "./components_scss/_App.scss";
import Container from "./components/Container";
import Greatings from "./components/Greatings";


function App(props) {
    return (
        <div id="main-container">
            <Container />
            <Greatings name="Elio" />

        </div>



    )
}

export default App;