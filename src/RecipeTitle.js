import React from 'react'
import './RecipeTitle.css'

const RecipeTitle = ({ recipe }) => {
    return (
        // recipe['recipe']['image'].match[/\.(jpeg|jpg|gif|png)$/]
        // != null && [
        <div
            className='recipe'
            onClick={() => {
                window.open(recipe['recipe']['url'])
            }}
        >
            <img src={recipe['recipe']['image']} className='recipeTile-img' />
            <p className='recipeTile-name'>{recipe['recipe']['label']}</p>
        </div>
        // ]
    )
}

export default RecipeTitle