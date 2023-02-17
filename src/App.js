import { useEffect, useState } from "react";
import { AuthContext } from "./context";
import LogIn from "./pages/LogIn";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    localStorage.getItem('token')&&setAuthenticated(true);
  }, []);
  return (
  <AuthContext.Provider value={[ authenticated , setAuthenticated]}>
    {/* put the Routes here */}
    <LogIn/>
  </AuthContext.Provider>
  )
}

export default App;
