import './RecipeList.css'
import { Link } from 'react-router-dom'

export default function RecipeList({ recipes }) {

  if (recipes.length === 0) {
    return <div style={{textAlign: "center"}}>No recipes found...</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Start cooking</Link>
        </div>
      ))}
    </div>
  )
}
