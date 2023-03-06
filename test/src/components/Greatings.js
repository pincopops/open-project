import React from "react";
import "../components_scss/_Greatings.scss";

function Greatings(props) {
    return (
        <>
            <div className="greatings_container">
                <h2 className="greatings_container_title1">{props.name ? `Hello, ${props.name}! Welcome to your personal area` : "Hey, you haven't already signed in yet"}</h2>
            </div>

        </>
    )
}

export default Greatings;