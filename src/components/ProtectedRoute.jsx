import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) =>{
    const user = useSelector((store)=>store.user);
    if(!user){
        return <Navigate to='/login'/>
    }
    return(
        <div>
            {children}
        </div>
    )
}
export default ProtectedRoute;