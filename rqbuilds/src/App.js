import './bootstrap.min.css'
import './App.css';
import { useState } from 'react';
import Categories from './components/categories';
import Perks from './components/perks';

function App() {

  const [botClass, setBotClass] = useState('Guardian');

  return (
    <div className="App">
      <div id='header'>
        <h1>RQ Builds</h1>
      </div>

      <div id='subheader'>
        <img src={'./' + botClass + '_Icon.png'}></img>
        <h1>{botClass}</h1>
        <div className='btn-group'>
          <button className='btn btn-primary btn-sm'>Change Class</button>
          <button className='btn btn-primary btn-sm'>View Community Builds</button>
          <button className="btn btn-primary btn-sm">Save Build</button>
          <button className='btn btn-primary btn-sm'>Load Saved Builds</button>
          <button className="btn btn-primary btn-sm">Reset</button>
        </div>
      </div>

      <div id='body'>

        <Categories></Categories>
        <Perks class={botClass}></Perks>

      </div>

    </div>
  );
}

export default App;
