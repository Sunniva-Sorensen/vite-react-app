import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import "./LoginForm.css";

export function LoginForm() {
    const [name, setName] = useState("");
    const { user, isLoggedIn, setUser, setIsLoggedIn } = useAuthContext();

    function handleLogin(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setUser({
            id: 1,
            name,
            email: "",
        });

        setIsLoggedIn(true);
    }

    function handleLogout() {
        setUser(undefined);
        setIsLoggedIn(false);
    }

    if (isLoggedIn) {
        return (
            <div className="login-status">
                <p>Logged in as {user?.name}</p>
                <button type="button" onClick={handleLogout}>
                    Log out
                </button>
            </div>
        );
    }

    return (
        <form className="login-form" onSubmit={handleLogin}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            <button type="submit">Log in</button>
        </form>
    );
}