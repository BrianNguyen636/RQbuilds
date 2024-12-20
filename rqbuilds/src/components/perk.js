import react, { useState } from "react"
import './perk.css'
export default function perk(props) {

    function drag(e) {
        e.dataTransfer.clearData()
        e.dataTransfer.setData("text/plain", props.name)
        console.log(e);
    }

    return (
        <div className="perk" draggable="true" onDragStart={drag}>
            <img src={props.src} id="perkImg" draggable='false'></img>
        </div>
    )
}