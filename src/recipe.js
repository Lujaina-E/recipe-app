import React from 'react';
//taking data from line11 on app.js, storing it in the prompt in the recipe tag, then recalling it in this function on line 3 in recipe.js
import style from './recipe.module.css'
const Recipe = ({title, dietlabel, image, ingredients}) => {//deconstructor
    return(
        <div className={style.recipe}>
            
            <h1>{title}</h1>
            <div></div>
            <p>{dietlabel}</p>
            <div></div>
            <ingredient>
                Ingredients
            </ingredient>
            <ul>
                {ingredients.map(ingredient=>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img className={style.image} src={image} alt="" />

        </div>
    );
}

export default Recipe;