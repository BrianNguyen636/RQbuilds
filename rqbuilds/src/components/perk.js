import react, { useState } from "react"
import './perk.css'
export default function perk(props) {

    function drag(e) {
        e.dataTransfer.clearData()
        e.dataTransfer.setData("text/plain", props.name)
    }

    return (
        <div className="perk" draggable="true" onDragStart={drag}>
            <img src={props.src} className="perkImg" id={props.name}></img>
        </div>
    )
}