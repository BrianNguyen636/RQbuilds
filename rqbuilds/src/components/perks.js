import react, { useState } from "react"
import perk from "./perk";
import { PERKS as perklist } from '../data/perkdata';
import './perks.css'

export default function Perks(props) {

    const [perks, setPerks] = useState(perklist[props.classID]);


    function dragOver(e) {        
        e.preventDefault();
    }
    function handleDrop(e) {    
        
        const data = e.dataTransfer.getData("text/plain")
        if (e.target.id === "perks" || e.target.className === 'categoryGrid' ) {
            e.target.appendChild(document.getElementById(data))
        } else {
            if (e.target.id != data) {
                document.getElementById('perks').appendChild(document.getElementById(data));
            } 
        }
    }

    return (
        <div>
            <div id='perks' onDragOver={e=>dragOver(e)} onDrop={e=>handleDrop(e)}>
                {perks.map(e => {
                    return (
                        <div id={e.name} key={e.id}>
                            {perk(e)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}