import { useLocation, Navigate, Outlet } from "react-router-dom";
import { User } from "../types/User";

interface Props {
    allowedRole?: string;
    user?: User | null;
}

const RequireAuth = (Props: Props) => {
    const location = useLocation();
    const { allowedRole, user } = Props;

    return (
        user?.AccountType === allowedRole
            ? <Outlet />
            : user
                ? <Navigate to={'/unauthorized'} state={{ from: location }} replace />
                : <Navigate to={'/login'} state={{ from: location }} replace />
    );
}

export default RequireAuth