import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { type User } from "../types/User";

interface UserProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: UserProviderProps) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | undefined>(undefined);

    return (
        <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>);
}