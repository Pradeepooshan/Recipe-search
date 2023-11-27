import axios from 'axios';
import './App.css';
import Navbar from './Components/Navbar';
import './key'
import { useState } from 'react';
import RecipeTitle from './RecipeTitle';

function App() {
  const [query, setQuery] = useState('')
  const [recipes, setRecipe] = useState([])
  const [healthLabel, setHealthLabel] = useState('vegan')

  const YOUR_APP_ID = '6c5c916b'
  const YOUR_APP_KEY = 'e3427014e042a407634a0d9bb7b240e8'

  let url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabel}`

  async function getRecipies() {
    let result = await axios.get(url)
    setRecipe(result.data.hits)
    console.log(result.data)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    getRecipies()
  }
  return (
    <div className="App">
      <h1>Food Recipe Plaza</h1>
      <form className='app-searchForm' onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Enter ingerident'
          value={query}
          onChange={e => setQuery(e.target.value)}
          className='app-input'
        />
        <input
          type='submit'
          value='search'
          className='app-submit'
        />

        <select className='app-healthLabel'>
          <option onClick={()=>setHealthLabel('vegan')}>Vegan</option>
          <option onClick={()=>setHealthLabel('vegitarian')}>vegitarian</option>
          <option onClick={()=>setHealthLabel('paleo')}>paleo</option>
          <option onClick={()=>setHealthLabel('dairy-free')}>dairy-free</option>
          <option onClick={()=>setHealthLabel('gluten-free')}>gluten-free</option>
          <option onClick={()=>setHealthLabel('wheat-free')}>wheat-free</option>
          <option onClick={()=>setHealthLabel('low-sugar')}>low-sugar</option>
          <option onClick={()=>setHealthLabel('egg-free')}>egg-free</option>
          <option onClick={()=>setHealthLabel('peanut-free')}>peanut-free</option>
          <option onClick={()=>setHealthLabel('soy-free')}>soy-free</option>
          <option onClick={()=>setHealthLabel('fish-free')}>fish-free</option>
          <option onClick={()=>setHealthLabel('shellfish-free')}>shellfish-free</option>
        </select>
      </form>

      <div className='app-recipes'>
        {recipes.map((recipe, index) => {
          return (
            <RecipeTitle recipe={recipe} key={index} />
          )
        })}
      </div>

    </div>
  );
}

export default App;
