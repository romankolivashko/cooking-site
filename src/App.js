import { BrowserRouter, Switch, Route } from 'react-router-dom'

import './App.css'
import Home from './pages/home/Home';
import NavBar from './components/NavBar';
import Create from './pages/create/Create';
import Search from './pages/search/Search';
import Recipe from './pages/recipe/Recipe';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/recipes/:id">
            <Recipe />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
