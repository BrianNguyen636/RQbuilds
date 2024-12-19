import './bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import Category from './components/category';
import perk from './components/perk';
import { PERKS as guardianPerks } from './data/guardianPerks';

function App() {
  const [categories, setCategories] = useState([
    new Category({
      label: "Category 1"
    })
  ]);
  const [botClass, setBotClass] = useState('Guardian');

  const [perks, setPerks] = useState(guardianPerks);


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

        <div id='perks'>
          {perks.map(e => {
            return (
              <div>
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
