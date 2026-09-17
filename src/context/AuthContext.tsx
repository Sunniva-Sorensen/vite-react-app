import { useContext } from "react";
import { type User } from "../types/User";
import { createContext } from "react";

interface AuthContextProps {
    user: User | undefined;
    setUser: React.Dispatch<React.SetStateAction<User | undefined>>;
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
};