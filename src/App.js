import { BrowserRouter,Link, Route, Switch } from 'react-router-dom'

// pages
import Home from './pages/Home'
import Services from './pages/Services'
import Agriculture from './pages/Agriculture'
import Manufacture from './pages/Manufacture'
import Community from './pages/Community'
import Error from './pages/Error'
// import logo from './images/logo.jpg'
 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <nav>
              <div className='logo'>
                <p>Iwizdom Privite limit</p>
              </div>

              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                {/* <li><Link to="/products">Products</Link></li> */}
              </ul>
            </nav>
       
       
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/services">
            <Services />
          </Route>
          
          <Route path="/agriculture">
            <Agriculture />
          </Route>
          <Route path="/manufacture">
            <Manufacture />
          </Route>
          <Route path="/community">
            <Community />
          </Route>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App