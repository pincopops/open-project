// import React, { useState } from "react";
// import "../components_scss/_Lists.scss"


// function List(props) {

//     const [list, setList] = useState([]);
//     const [value, setValue] = useState("");


//     const handleListAdd = () => {
//         let tempArr = list;
//         tempArr.push(value);
//         setList(tempArr);
//         setValue("");
//     }

//     const handleListRemove = () => {
//         const tempArr = [...list]; // copia l'array esistente
//         tempArr.pop(); // rimuove l'ultimo elemento dall'array
//         setList(tempArr); // aggiorna l'array con il nuovo stato
//         setValue(""); // reimposta il valore dell'input a vuoto
//     }

//     const handleListReset = () => {
//         setList([]);
//         setValue("");
//     }



//     return (
//         <>

//             <div className="list-main-container">
//                 <h3>Add items to your wishlist</h3>
//                 <input type="text" value={value} onChange={(event) => setValue(event.target.value)}></input>
//                 <button className="wishlist-button" onClick={handleListAdd}>Wishlist ❤️‍🔥</button>
//                 <button className="trash-button" onClick={handleListRemove}>Trash 🚮</button>
//                 <button className="reset-button" onClick={handleListReset}>Trash all🚮</button>
//                 <ul>{list.map((item, key) => <li key={key + item}>{item}</li>)}</ul>
//             </div>
//         </>
//     )
// }

// export default List;

import React, { useState } from "react";
import "../components_scss/_Lists.scss";

function List(props) {
  const [list, setList] = useState([]);
  const [value, setValue] = useState("");

  const handleListAdd = () => {
    setList([...list, value]);
    setValue("");
  };

  const handleListRemove = () => {
    setList(list.slice(0, -1));
  };

  const handleListReset = () => {
    setList([]);
    setValue("");
  };

  return (
    <>
      <div className="list-main-container">
        <h3>Add items to your wishlist</h3>
        <input
          type="text"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        ></input>
        <button className="wishlist-button" onClick={handleListAdd}>
          Wishlist ❤️‍🔥
        </button>
        <button className="trash-button" onClick={handleListRemove}>
          Trash 🚮
        </button>
        <button className="reset-button" onClick={handleListReset}>
          Reset 🔄
        </button>
        <ul>
          {list.map((item, key) => (
            <li key={key + item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default List;



