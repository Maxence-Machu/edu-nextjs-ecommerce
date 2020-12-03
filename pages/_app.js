import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserContext from "../stores/UserContext";
import { useState } from "react";
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState({ name: "" });

  const signIn = () => {
    setUser({ name: "John Doe" });
  };

  const signOut = () => {
    setUser({ name: "" });
  };
  return (
    <UserContext.Provider value={{ user, signIn, signOut }}>
      <Component {...pageProps} />
    </UserContext.Provider>
  );
}

export default MyApp;
