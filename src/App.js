import {Routes, Route, NavLink} from 'react-router-dom';
import Login from './pages/Login';
import HomePage from './pages/Home';
import Dashboard from './pages/Dashboard';

function App() {

  return (
    
    <div className="App">   
      {/* <Login onSubmit = {login} buttonText="Login" /> */}
      <div className="header">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/dashboard">dasboard</NavLink>
      </div>
      <div className="content">
        <Routes>
          <Route path ="/" element={<HomePage />} />
          <Route path ="/login" element={<Login />} />
          <Route path ="/dashboard" element={<Dashboard />} />
          
        </Routes>
      </div>
      
    </div>
    
  );
}

export default App;
