import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signin = (token) => {
        const decodedUser = jwtDecode(token);
        setUser(decodedUser);
    }

    const signout = () => {
        setUser(null);
    };

    return (
        <UserContext.Provider value={{user, signin, signout}}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    return useContext(UserContext);
}