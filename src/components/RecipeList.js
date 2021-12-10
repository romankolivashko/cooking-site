import './RecipeList.css'
import { useTheme } from '../hooks/useTheme'
import { Link } from 'react-router-dom'
import Trash from '../assets/trash-bin.svg'
import { projectFirestore } from '../firebase/config'

export default function RecipeList({ recipes }) {
  const {mode} = useTheme()

  if (recipes.length === 0) {
    return <div style={{textAlign: "center"}}>No recipes found...</div>
  }

  const handleClick = (id) => {
    projectFirestore.collection('recipes').doc(id).delete()
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className={`card ${mode}`}>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Start cooking</Link>
          <img 
            className="delete"
            src={Trash}
            alt="delete icon"
            onClick={() => handleClick(recipe.id)}
            />
        </div>
      ))}
    </div>
  )
}
