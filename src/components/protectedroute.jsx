import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null;
  return user ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
