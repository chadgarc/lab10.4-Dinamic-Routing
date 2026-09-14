import type { ReactNode } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useState } from "react";

const loggedIn = localStorage.getItem("isAuth")

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuth, setIsAuth] = useState<boolean>(loggedIn ? JSON.parse(loggedIn) : false);
    const login = () => {
        setIsAuth(true);
        localStorage.setItem("isAuth", "true");
    };
    const logout = () => {
        setIsAuth(false);
        localStorage.setItem("isAuth", "false");
    };
    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}