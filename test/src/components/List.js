import React, { useState } from "react";
import "../components_scss/_Lists.scss"


function List(props) {

    const [list, setList] = useState([]);
    const [value, setValue] = useState("");

    const handleListAdd = () => {
        let tempArr = list;
        tempArr.push(value);
        setList(tempArr);
        setValue("");
    }

    const handleListRemove = (index) => {
        let temp = list.filter((item,i) => i !== index);
        setList(temp);
    }


    return (
        <>
            
            <div className="list-main-container">
                <h3>Add items to your wishlist</h3>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}></input>
                <button className="wishlist-button" onClick={handleListAdd}>Wishlist ❤️‍🔥</button>
                <button className="trash-button" onClick={handleListRemove}>Trash 🚮</button>
                <ul>{list.map((item, key) => <li key={key + item}>{item}</li>)}</ul>
            </div>
        </>
    )
}

export default List;



