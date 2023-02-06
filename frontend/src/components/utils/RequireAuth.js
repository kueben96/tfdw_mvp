// import { useSelector } from "react-redux";
// import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { selectCurrentToken } from "../../store/reducers/authSlice";


// const RequireAuth = () => {

//     const token = useSelector(selectCurrentToken)
//     const location = useLocation()

//     //TODO: handle user roles
//     return (
//         token
//             ? <Outlet />
//             : <Navigate to="login" state={{ from: location }} replace></Navigate>
//     )
// }

// export default RequireAuth

