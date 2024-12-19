import react, { useState } from "react"
import './perk.css'
export default function perk(props) {
    return (
        <div id="perk">
            <img src={props.src} id="perkImg"></img>
        </div>
    )
}