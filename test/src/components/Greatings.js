import React from "react";
import "../components_scss/_Greatings.scss";

function Greatings(props) {
    return (
        <>
            <div className="greatings_container">
                <h2 className="greatings_container_title1">{props.name ? `Hello, ${props.name}! Welcome in your personal area` : "Hello, you did not signed in"}</h2>
            </div>

        </>
    )
}

export default Greatings;