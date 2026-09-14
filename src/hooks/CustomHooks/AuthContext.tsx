import type { ReactNode } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useState } from "react";

export const AuthProvider = ({children}: {children: ReactNode}) => {
    const [isAuth, setIsAuth] = useState(false);
    const login = () => {
        setIsAuth(true);
    };
    const logout = () => {
        setIsAuth(false);
    };
    return (
        <AuthContext.Provider value={{isAuth, login, logout}}>
            {children}
        </AuthContext.Provider>
    );
}