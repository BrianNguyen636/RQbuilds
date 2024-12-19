import react, { useState } from "react"
import './perk.css'
export default function perk(props) {
    return (
        <div>
            <img src={props.src} id="perkImg"></img>
        </div>
    )
}