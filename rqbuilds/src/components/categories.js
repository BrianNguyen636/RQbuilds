import React, {useState} from "react"
import Category from "./category";
import './categories.css'

export default function Categories(props) {

    const [categories, setCategories] = useState([
        {
            id: 1,
            label: "Category 1",
            perks:[],
            classID: props.classID
        }
    ]);

    return(
        <div>
            <div id='categories'>
                {categories.map(e => {
                return(
                    <div>
                        {Category(e)}
                    </div>
                )
                })}
            </div>

            <button className="btn btn-primary" disabled={categories.length >= 5} onClick={()=>{
                let newId = categories.length + 1
                setCategories([...categories, {
                    id: newId,
                    label: "Category " + newId,
                    perks:[],
                    classID: props.classID
                }])
            }}>Add Category</button>
        </div>
    )
}