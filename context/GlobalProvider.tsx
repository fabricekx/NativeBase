import React, { createContext, useContext, useEffect, useState } from "react";

import { getCurrentUser } from "../lib/appwrite";

const GlobalContext = createContext(null); // création d'un context
export const useGlobalContext = () => useContext(GlobalContext); // exportation du hook useContext avec notre context

const GlobalProvider = ({ children }) => {  // composant qui rend disponible le contexte aux enfants
  const [isLogged, setIsLogged] = useState(false); // états locaux, liste des variables que nosu allons transmettre au provider
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => { // pour charger l'utilisateur connecté
    getCurrentUser() // depuis appwrite
      .then((res) => { // comme getCurrentUser () est une fonction asynchrone, on utilise .then
        if (res) {
          setIsLogged(true);
          setUser(res);
        } else {
          setIsLogged(false);
          setUser(null);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => { // fianly est fait dans tout les cas, que try ou que catch ai marché
        setLoading(false);
      });
  }, []); // pas de dépendance de précisées, donc ce yseEffect sera lancé au début

  return (
    <GlobalContext.Provider // fourniture du context
      value={{ // liste des variables que nous voulons transmettre
        isLogged,
        setIsLogged,
        user,
        setUser,
        loading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;