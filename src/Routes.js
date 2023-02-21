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
import Customized from "./pages/CustomizedReport";
import ImageInput from "./pages/dataUpload";
import Governance from "./pages/Governance";
import Envireoment from "./pages/Enviroment";
import Social from "./pages/social";

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
        <Route path="CustomizedReport" element={<Customized />} />
        <Route path="DataUpload" element={<ImageInput />} />
        <Route path="Governance" element={<Governance />} />
        <Route path="Enviroment" element={<Envireoment />} />
        <Route path="Social" element={<Social />} />

        <Route path="Governance" element={<Governance />} />

        <Route path="*" element={<PageNotFound />} />
      </Route>
      <Route path="/*" element={<PageNotFound />} />
    </Routes>
  );
};
export default MyRoutes;
