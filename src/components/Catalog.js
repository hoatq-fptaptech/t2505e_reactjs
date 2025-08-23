import { useState } from "react";

function Catalog(props){
    const cat = props.cat;
    const [active,setActive] = useState("Active");
    const [color,setColor] = useState("");
    const disable = ()=>{ // arrow function
        setActive("Deactive");// hiểu: active = "Deactive";
    }
    const favourite = ()=>{
        if(color == "")
            setColor("text-danger");
        else
            setColor("");
    }
    return (
        <div>
            <h1>{cat.name}</h1>
            <h2>Total Item: {cat.count} products</h2>
            <p>{active}</p>
            <button onClick={disable} type="button">Disable</button>
            <p><i onClick={favourite} class={"bi bi-hand-thumbs-up "+color }></i></p>
        </div>
    )
}
export default Catalog;