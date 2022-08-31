import { useContext, useEffect } from "react";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { User } from "../types/User";
import { AuthContext } from "./AuthContext";

interface Props {
    allowedRole?: string;
    user?: User | null;
}

const RequireAuth = (Props: Props) => {
    const location = useLocation();
    const { allowedRole, user } = Props;
    console.log({ Props });
    console.log({ user });

    return (
        user?.AccountType === allowedRole
            ? <Outlet />
            : user
                ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
                : <Navigate to={'/login'} state={{ from: location }} replace />
    );
}

export default RequireAuth