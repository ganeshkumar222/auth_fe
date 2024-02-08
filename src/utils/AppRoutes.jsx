import { Navigate } from "react-router-dom";
import { AdminDashboard } from "../components/AdminDashboard";
import { Signin } from "../components/Signin";
import { Signup } from "../components/Signup";
import { UserDashboard } from "../components/UserDashboard";
import { AdminProtectedRoute } from "./AdminProtectedRoute";
import { UserProtectedRoute } from "./UserProtectedRoute";
import { Update } from "../components/Update";
import {ChangePassword} from '../components/ChangePassword'
import { Change } from "../components/Change";
import { ForgetPassword } from "../components/ForgetPassword";

const AppRoutes = [
    {
        path :"/",
        element:<Signin></Signin>
        
    },
    {
        path:"/signup",
        element:<Signup></Signup>
    },
    {
        path:"/user",
        element:<UserProtectedRoute> <UserDashboard></UserDashboard></UserProtectedRoute>
        
    },
    {
        path:"/admin",
        element:<AdminProtectedRoute><AdminDashboard></AdminDashboard></AdminProtectedRoute>
    },
    {
        path:"/update/:id",
        element:<Update></Update>

    },
    {
       path:"/changepassword/:id",
       element:<ChangePassword></ChangePassword>
    },
    {
       path:"/change",
       element:<Change></Change>
    },
    {
        path:"/forget/:email",
        element:<ForgetPassword></ForgetPassword>
    },
    {
        path:"/*",
        element:<Navigate to={"/"}></Navigate>
    }
    
]

export default AppRoutes