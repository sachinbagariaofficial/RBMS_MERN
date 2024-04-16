import React, { useState } from 'react';

import AdminDashboard from './AdminDashboard.tsx';
import ManagerDashboard from './ManagerDashboard.tsx';
import UserDashboard from './UserDashboard.tsx';

const Dashboard = () => {;

const [dashboardType ,  setDashboardType] = useState<string>("admin")
   

  return (
 dashboardType === "admin" ? <AdminDashboard/> : <ManagerDashboard/>
  )
}

export default Dashboard