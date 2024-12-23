import React, {Component, useState} from 'react';
import './category.css'
import perk from './perk';


export default function Category(props) {

    return (
        <div id='category'>
            <button id='categoryLabel' className='btn'>
                {props.label}
            </button>
            <div className='categoryGrid' id={props.id}>
                {props.perks.map(e => {return(
                    <div id={e.name} key={e.id}>
                        {perk(e)}
                    </div>
                )})}
            </div>
        </div>
    )
    
}