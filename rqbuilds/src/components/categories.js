import React, {useState} from "react"
import Category from "./category";
import './categories.css'



export default function Categories(props) {

    const [categories, setCategories] = useState([
        new Category({
            id: 1,
            label: "Category 1",
            perks:[]
        }),
    ]);

    return(
        <div>
            <div id='categories'>
                {categories.map(e => {
                return(
                    <div>
                    {e.render()}
                    </div>
                )
                })}
            </div>

            <button className="btn btn-primary" disabled={categories.length >= 5} onClick={()=>{
                let newId = categories.length + 1
                const newCategory = new Category({
                    id: newId,
                    label: "Category " + newId,
                    perks:[]
                })
                setCategories([...categories, newCategory])
            }}>Add Category</button>
        </div>
    )
}