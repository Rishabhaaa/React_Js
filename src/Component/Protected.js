import { Navigate } from "react-router-dom";
const Protected = ({ isLoggedIn, children }) => {
    if (!isLoggedIn) {
        return <Navigate to="Profile" replace />;
    }
    return children;
};
export default Protected;