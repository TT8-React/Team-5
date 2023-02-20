import { useEffect, useState } from "react";
import { AuthContext } from "./context";
import MyRoutes from "./Routes";
function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem("token") && setAuthenticated(true);
  }, []);
  return (
    <AuthContext.Provider value={[authenticated, setAuthenticated]}>
      <MyRoutes />
    </AuthContext.Provider>
  );
}

export default App;
