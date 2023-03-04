import React from "react";
import "../components_scss/_Greatings.scss";

function Greatings(props) {
    return (
        <>
            <div className="greatings_container">
                <h2 className="greatings_container_title1">{props.name ? `Hello, ${props.name}` : "Hello, guest"}</h2>
                <h3 className="greatings_container_title2">Questo è l'ingresso al tuo sito</h3>
                <h4 className="greatings_container_title3">Da qui puoi controllare la tua applicazione</h4>
            </div>

        </>
    )
}

export default Greatings;