import React, {Component, useState} from 'react';
import './category.css'
import perk from './perk';


export default function Category(props) {

    return (
        <div id='category'>
            <input id={'label' + props.id} type='text' className= 'categoryLabel' placeholder={props.label}/>
            <div className='categoryGrid' id={props.id}>
                {props.perks.map(e => {return(
                    <div id={e.name} key={e.id} draggable='false'>
                        {perk(e)}
                    </div>
                )})}
            </div>
        </div>
    )
    
}