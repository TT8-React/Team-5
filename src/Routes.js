import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { AuthContext } from "./context";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CompanyDetails from "./pages/CompanyDetails";
import PrivateRoute from "./PriveteRoutes";

const MyRoutes = () => {
  const [isAuthenticated] = useContext(AuthContext);
  return (
    <Routes>
      <Route index element={<Navigate to="/Login" />} />
      <Route
        path="/Login"
        element={isAuthenticated ? <Navigate to="/Home" /> : <LogIn />}
      />
      <Route
        path="/Signup"
        element={isAuthenticated ? <Navigate to="/Home" /> : <SignUp />}
      />
      <Route path="/Home" element={<PrivateRoute />}>
        <Route index element={<CompanyDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
export default MyRoutes;
