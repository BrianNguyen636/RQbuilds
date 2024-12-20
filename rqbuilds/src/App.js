import './bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import Category from './components/category';
import perk from './components/perk';
import { PERKS as guardianPerks } from './data/guardianPerks';

function App() {
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
  const [botClass, setBotClass] = useState('Guardian');

  const [perks, setPerks] = useState(guardianPerks);

  function dragOver(e) {        
    e.preventDefault();
  }
  function handleDrop(e) {    
    if (e.target.id == "perks" || e.target.className == 'categoryGrid' ) {
        const data = e.dataTransfer.getData("text/plain")
        e.target.appendChild(document.getElementById(data))
    } else {
      const data = e.dataTransfer.getData("text/plain")
      document.getElementById('perks').appendChild(document.getElementById(data));
    }
    // this.perks = this.perks += perk;
}

  return (
    <div className="App">
      <div id='header'>
        <h1>RQ Builds</h1>
      </div>

      <div id='subheader'>
        <img src={'./' + botClass + '_Icon.png'}></img>
        <h1>{botClass}</h1>
      </div>

      <div id='body'>

        <div id='categories'>
          {categories.map(e => {
            return(
              <div>
                {e.render()}
              </div>
            )
          })}
        </div>

        <div id='perks' onDragOver={e=>dragOver(e)} onDrop={e=>handleDrop(e)}>
          {perks.map(e => {
            return (
              <div id={e.name}>
                {perk(e)}
              </div>
            )
          })}
        </div>

      </div>

    </div>
  );
}

export default App;
