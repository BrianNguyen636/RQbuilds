import React, {Component, useState} from 'react';
import './category.css'
import perk from './perk';
import { PERKS as perklist } from '../data/perkdata';


export default function Category(props) {

    const [perks, setPerks] = useState(props.perks)

    function dragOver(e) {        
        e.preventDefault();
    }
    function handleDrop(e) {    
        const data = e.dataTransfer.getData("text/plain")
        const object = perklist[props.classID][data]
        console.log(object)
        setPerks([...perks, object])
    }

    return (
        <div id='category'>
            <button id='categoryLabel' className='btn'>
                {props.label}
            </button>
            <div className='categoryGrid' onDragOver={e => dragOver(e)} onDrop={e=>handleDrop(e)}>
                {perks.map(e => {return(
                    <div id={e.name} key={e.id}>
                        {perk(e)}
                    </div>
                )})}
            </div>
        </div>
    )
    
}