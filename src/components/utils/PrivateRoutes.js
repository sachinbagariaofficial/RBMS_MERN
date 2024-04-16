import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import Header from '../Layout/Header.tsx';
const PrivateRoutes = () => {

  // const token = Cookies.get("token");

return (
    // token  ? <>  <Header/> <Outlet/> </> : <Navigate to='/login'/>
   <> <Header/> <Outlet/></> 
  )
}

export default PrivateRoutes