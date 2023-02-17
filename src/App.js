import { useEffect, useState } from "react";
import { AuthContext } from "./context";
import CompanyDetails from "./pages/CompanyDetails";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") && setAuthenticated(true);
  }, []);
  return (
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      {/* put the Routes here */}
      <CompanyDetails />
    </AuthContext.Provider>
  );
}

export default App;
