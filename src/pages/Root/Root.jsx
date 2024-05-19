import { Outlet } from "react-router-dom";
import Navber from "../../Component/Navber/Navber";


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navber></Navber>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;