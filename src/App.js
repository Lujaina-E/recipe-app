import './App.css';
import Recipe from './recipe';
import React, { useEffect, useState } from "react";
import style from './recipe.module.css'


const App = () => {

  const APP_ID = 'e8fa9b60';
  const APP_KEY = '938f6a5be6fd136e63e492c2573860f2';


  const[recipes, setRecipes] = useState([]);
//^everything is stored in here from the API
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');


  useEffect( () => {
    getRecipes();
  }, [query]);


  const getRecipes = async() =>{
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json(); //this is intaking info from an external API, so you have to wait for it
    setRecipes(data.hits);
    console.log(data.hits);
  } ;


  const getSearch = e =>{ //e-> takes in user input
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  const updateSearch = e => {
    setSearch(e.target.value); //value of input
  };


  return(



    <div className="App">

      <form onSubmit={getSearch} className="search-form">
        <h1 className={style.apptitle}>Recipe-Finder</h1>
      <div className={style.spacer}></div>
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className={style.spacer}></div>
      <div className={style.spacer}></div>
      <div className={style.spacer}></div>
      <div className='recipes'>
        {
        recipes.map(recipe=>(
          <Recipe 
          key={recipe.recipe.label} //each item from the API needs a different label
          title={recipe.recipe.label} 
          dietlabel={recipe.recipe.dietLabels} //properties that came from the data... found in console
          image={recipe.recipe.image}
          ingredients = {recipe.recipe.ingredients}
          />
        ))}

      </div>


    </div>
  );

}
export default App;
