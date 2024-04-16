import './App.css';
import Header from "./components/Layout/Header.tsx"
import Footer from './components/Layout/Footer.tsx';
import Signup from './components/Auth/Signup.tsx';
import Login from './components/Auth/Login.tsx';
import AdminDashboard from './components/Dashboard/AdminDashboard.tsx';
import ManagerDashboard from './components/Dashboard/ManagerDashboard.tsx';
import { Route , Routes } from 'react-router-dom';
import PrivateRoutes from './components/utils/PrivateRoutes.js';
import Dashboard from './components/Dashboard/Dashboard.tsx';
import 'react-toastify/dist/ReactToastify.css';
import UserDashboard from './components/Dashboard/UserDashboard.tsx';
function App() {
  return (
    <div className="App">
    
  
  <Routes>
    <Route element={<PrivateRoutes/>} >
    <Route  path='/' element={<Dashboard/>} />
    </Route>
    <Route  path='/login' element={<Login/>} />
    <Route  path='/signup' element={<Signup/>} />
  </Routes>
 <Footer/>
    </div>
  );
}

export default App;
