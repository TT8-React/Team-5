import { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import { AuthContext } from "./context";
import SignUp from "./pages/SignUp";
import LogIn from "./pages/LogIn";
import CompanyDetails from "./pages/CompanyDetails";
import ProfileDetails from "./pages/ProfileDetails";
import PrivateRoute from "./PriveteRoutes";
import Layout from "./components/Layout/Layout";
import Report from "./pages/Report";
import MyReport from "./pages/MyReport";

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
        <Route path="ProfileDetails" element={<ProfileDetails />} />
        <Route path="Report" element={<Report />} />
        <Route path="MyReport" element={<MyReport />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
export default MyRoutes;
