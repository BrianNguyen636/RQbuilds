import react, { useState } from "react"
import './perk.css'
export default function perk(props) {

    function drag(e) {
        e.dataTransfer.setData("object", )
    }

    return (
        <div id="perk" draggable="true">
            <img src={props.src} id="perkImg"></img>
        </div>
    )
}