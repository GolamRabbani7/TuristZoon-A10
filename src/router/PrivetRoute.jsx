import { useContext } from "react";
import { AuthContext } from "../Component/AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivetRoute = ({ children }) => {
    const { user, lodding } = useContext(AuthContext);
    
    if (user) {
        return children
    }
    if (lodding) {
        return <div>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    return (
        <Navigate to='/login'>

        </Navigate>
    );
};

export default PrivetRoute;