import react, { use, useState } from "react"
import perk from "./perk";
import { PERKS as perklist } from '../data/perkdata';
import './perks.css'

export default function Perks(props) {

    const [perks, setPerks] = useState(perklist[props.classID]);
    const [hoveredPerk, setHoveredPerk] = useState({name:''});

    function onHover(e) {
        setHoveredPerk(perks[e.target.id])
        console.log(hoveredPerk.name)
    }


    // function dragOver(e) {        
    //     e.preventDefault();
    // }
    // function handleDrop(e) {    
        
    //     const data = e.dataTransfer.getData("text/plain")

    // }

    return (
        <div>
            <div className="tooltip">{hoveredPerk.name}</div>
            <div id='perks'>
                {perks.map(e => {
                    return (
                        <div id={e.id} key={e.id} onMouseEnter={onHover}>
                            {perk(e)}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}