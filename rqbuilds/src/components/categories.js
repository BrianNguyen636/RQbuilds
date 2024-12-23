import React, {useState} from "react"
import Category from "./category";
import './categories.css'
import { PERKS as perklist } from '../data/perkdata';


export default function Categories(props) {

    const [categories, setCategories] = useState([
        {
            id: 0,
            label: "Category 1",
            perks:[],
            classID: props.classID
        }
    ]);

    function dragOver(e) {        
        e.preventDefault();
    }
    function handleDrop(e) {    
        const data = e.dataTransfer.getData("text/plain")
        const object = perklist[props.classID][data]
        if (e.target.className == "categoryGrid") {
            let category = categories[e.target.id]
            if (!category.perks.includes(object)) category.perks = [...category.perks, object]
            setCategories([...categories])
        }
    }
    

    return(
        <div>
            <div id='categories'>
                {categories.map(e => {
                return(
                    <div onDragOver={e => dragOver(e)} onDrop={e=>handleDrop(e)}>
                        {Category(e)}
                    </div>
                )})}
            </div>

            <button className="btn btn-primary" disabled={categories.length >= 5} onClick={()=>{
                let newId = categories.length + 1
                setCategories([...categories, {
                    id: newId - 1,
                    label: "Category " + newId ,
                    perks:[],
                    classID: props.classID
                }])
            }}>Add Category</button>
        </div>
    )
}