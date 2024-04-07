import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Categories from './pages/Categories';
import Products from './pages/Products';

function App() {
  return (
    <Router>
      <Routes>
         <Route path='/'  element={<Login></Login>} />
         <Route path='/dashboard'  element={<Dashboard></Dashboard>} />
         <Route path='/categories'  element={<Categories></Categories>} />
         <Route path='/products'  element={<Products></Products>} />
         {/* <Route path='/'  element={<Login></Login>} /> */}
      </Routes>
     
    </Router>
  );
}

export default App;
