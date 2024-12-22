import react, { useState } from "react"
import perk from "./perk";
import { PERKS as guardianPerks } from '../data/guardianPerks';
import './perks.css'

export default function Perks(props) {

    const [perks, setPerks] = useState(guardianPerks);


    function dragOver(e) {        
        e.preventDefault();
    }
    function handleDrop(e) {    
        const data = e.dataTransfer.getData("text/plain")
        if (e.target.id == "perks" || e.target.className == 'categoryGrid' ) {
            e.target.appendChild(document.getElementById(data))
        } else {
          document.getElementById('perks').appendChild(document.getElementById(data));
        }
    }

    return (
        <div>
            <div id='perks' onDragOver={e=>dragOver(e)} onDrop={e=>handleDrop(e)}>
                {perks.map(e => {
                    return (
                        <div id={e.name}>
                        {perk(e)}
                        </div>
                    )
                })}
            </div>
            <button className="btn btn-primary btn-sm">Reset</button>
            <button className="btn btn-primary btn-sm">Save Build</button>

        </div>
    )
}