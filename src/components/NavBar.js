import { Link } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useTheme } from '../hooks/useTheme'

import './NavBar.css'

export default function NavBar() {
  const { color, changeColor } = useTheme()

  return (
    <div className="navbar" style={{background: color}}>
      <nav onClick={() => changeColor('pink')}>
        <Link to="/" className="brand">
          <h1>Cooking App</h1>
        </Link>
        <SearchBar />
        <Link to="/create">
        Create Recipe
        </Link>
      </nav>
    </div>
  )
}
