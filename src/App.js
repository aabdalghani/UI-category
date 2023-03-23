import { BrowserRouter, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Agriculture from './pages/Agriculture'
import Manufacture from './pages/Manufacture'
import Community from './pages/Community'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>Categories</h1>
          
        </nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/agriculture">
            <Agriculture />
          </Route>
          <Route path="/manufacture">
            <Manufacture />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App