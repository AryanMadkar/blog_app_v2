import React, { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../libs/Firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [authorise, setauthorise] = useState(false);
  const [userdata, setuserdata] = useState([]);
  const [loading, setloading] = useState(true);

  const initilizauser = async (users) => {
    if (users) {
      setuserdata({ ...users });
      setauthorise(true);
    } else {
      setuserdata(null);
      setauthorise(false);
    }
    setloading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initilizauser);
    return unsubscribe;
  }, []);

  return (
    <ThemeContext.Provider
      value={{
        authorise,
        setauthorise,
        userdata,
        setuserdata,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(ThemeContext);
};
