import React, {useState} from "react"
import Category from "./category";

export default function Categories(props) {

      const [categories, setCategories] = useState([
        new Category({
          label: "Category 1",
          perks:[]
        }),
        new Category({
          label: "Category 2",
          perks:[]
        })
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
        </div>
    )
}