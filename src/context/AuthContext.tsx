import React, { createContext, useContext, useEffect, useState } from "react";
import { saveAuthData, getAuthData, removeAuthData } from "../services/storage";


export type User = {
  id: string;
  email: string;
  token: string;
}

interface AuthContextType {

  user?: User;
  saveUserData: (user: User) => void;
  getUserData: () => User;
}


export const AuthContext = createContext({} as AuthContextType)


export function AuthContextProvider({ children }: { children: React.ReactNode }) {

  const [user, setUser] = useState<User>();

  const saveUserData = (user: User) => {
    setUser(user);
    saveAuthData(user);

  }

  useEffect(() => {
    const user = getUserData();
    if (user) {
      setUser(user)
    }
  }, [])

  function getUserData() {
    return getAuthData();
  }

  return (
    <AuthContext.Provider value={{ user, saveUserData, getUserData }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}