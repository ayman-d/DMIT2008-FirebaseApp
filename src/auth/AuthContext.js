import React, { useState, useEffect } from "react";
import firebaseApp from "../firebase/firebaseConfig";

const AuthContext = React.createContext(null);

const AuthProvider = (props) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    uid: null,
    authenticated: false,
  });

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged((userCredentials) => {
      if (userCredentials) {
        setUser({
          name: userCredentials.displayName,
          email: userCredentials.email,
          uid: userCredentials.uid,
          authenticated: true,
        });
      } else {
        setUser({ email: "", uid: null, authenticated: false });
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={user}>{props.children}</AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
