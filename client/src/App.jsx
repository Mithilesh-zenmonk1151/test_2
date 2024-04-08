import { Box } from '@mui/material';
import './App.css';
import Login from './page/auth/login/Login';
import Signup from './page/auth/signup/Signup';
import AdminDashBoard from "./page/dashboard/adminDasfhboard/AdminDashBoard"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  

} from "react-router-dom";
import Home from './page/home/Home';
import AddTest from './page/addTests/AddTest';
import AddQuestion from './page/addQuestions/AddQuestion';

function App() {
  const PrivateRoute = ({ children }) => {
    const isAuth = localStorage.getItem("token");
    return isAuth === null ? <Navigate to="/login" /> : <>{children}</>;
  };
  // const ProtectedRoute=({children})=>{
  //   const isAdmin=localStorage.getItem("persist");
  //   isAdmin?.auth?.role==="Admin" ? <>{children}</> :<Navigate to="/home"/>
      
    
    
  // }
  return (
    <Router>
      <Box>
       <Routes>
       <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        />
         <Route
          path="/admin-dashboard"
          element={
           
              // <ProtectedRoute>
                 <PrivateRoute>
              <AdminDashBoard/>
              </PrivateRoute>

              // </ProtectedRoute>
          }
        />
        /add-quistions
        <Route
          path="/add-quistions"
          element={
           
              // <ProtectedRoute>
                 <PrivateRoute>
             <AddQuestion/>
              </PrivateRoute>

              // </ProtectedRoute>
          }
        />
         <Route
          path="/add-test"
          element={
           
              // <ProtectedRoute>
                 <PrivateRoute>
             <AddTest/>
              </PrivateRoute>

              // </ProtectedRoute>
          }
        />
        
       <Route path='/signup' element={<Signup/>}/>
       <Route path="/" element={<Signup />} />
        <Route path='/login' element={<Login/>}/>
       </Routes>

      </Box>
    </Router>
  );
}

export default App;
