import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { type User } from "../types/User";

interface UserProviderProps {
    children: React.ReactNode;
}

export const AuthProvider = ({ children }: UserProviderProps) => {
    const userD: User = {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com"
    }

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState<User | undefined>(userD);

    return (
        <AuthContext.Provider value={{ user, setUser, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>);
}