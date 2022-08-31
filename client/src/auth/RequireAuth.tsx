import { useContext } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";

interface Props {
    allowedRole?: string;
}

const RequireAuth = (Props: Props) => {
    const user = useContext(AuthContext).user;
    const location = useLocation();
    const { allowedRole } = Props;
    var aux: boolean = false;
    if (user) {
        aux = true;
    }
    console.log(aux);

    return (
        user?.AccountType === allowedRole
            ? <Outlet />
            : aux
                ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
                : <Navigate to={'/login'} state={{ from: location }} replace />
    );
}

export default RequireAuth