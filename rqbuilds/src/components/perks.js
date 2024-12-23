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

    }

    return (
        <div>
            <div id='perks'>
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