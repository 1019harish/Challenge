import {BrowserRouter as Router, Link , Switch , Route , Redirect} from 'react-router-dom'
import { useState } from 'react'

import './App.css';
import Home from './Components/Home';
import Login from './Components/Login';
import Users from './Components/Users';


function App() {

  const [userLoginState, setUserLoginState] = useState(false);
  const onLogout = () => {
    localStorage.clear();
    setUserLoginState(false)
  }
  return (
    <>
    <Router>
        
    {/*NavBar-1*/}
    <nav className='navbar navbar-expand-lg navbar-light bg-white py-4 ' >
    <div className='container-fluid'>
    
    <Link className='navbar-brand p-2' href='#' id='eshoppy' to="/home">
    <strong> 
    <h3> E-Users </h3>
    </strong>
    </Link>


  
    <button className="navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
    <span className="navbar-toggler-icon"></span>
    </button>
    


    <div className="collapse navbar-collapse order-lg-1" id="navMenu">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 ms-auto">
          <li className="nav-item">
            <Link className ="nav-link active"  to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to='/Users'>Users</Link>
          </li>
          {! userLoginState ?

<li className='list-group-item'>
<Link to='/login' className="btn btn-outline-dark ms-2">
<i className='fa fa-sign-in me-1'>Login</i>
</Link>
</li> :
<li className='list-group-item'>
<Link to='/login' className="btn btn-outline-dark ms-2" onClick={ () => onLogout()}>
<i className='fa-solid fa-right-from-bracket me-1'>Logout</i>
</Link>
</li>
}
        </ul>
       </div>
    </div>
    </nav>
    
    
      {/*Switch to route children */}   
      <Switch>

      <Route path="/home">
          <Home/>
      </Route>
            
      <Route path="/users">
          <Users/>
      </Route>
      
      <Route path="/login">
          <Login  state = {{setUserLoginState : setUserLoginState}}/>
      </Route>

      <Route path="/">
          <Redirect to = "/home"/>
      </Route>
      </Switch>    
    </Router>
    

    </>
  );
}

export default App;
