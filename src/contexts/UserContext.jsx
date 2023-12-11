import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

// Create a context to manage user-related state and actions
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // State to hold user information
  const [user, setUser] = useState({
    token: "",
    role: "",
  });

  // Function to handle user signin
  const signin = (token, role) => {
    // Decode the token to get user data and set user with data
    //const decodedUser = jwtDecode(token);
    setUser({ token, role });
  };

  // Function to handle user signout
  const signout = () => {
    setUser(null);
  };

  // Provide the user state and functions to the components within the context
  return (
    <UserContext.Provider value={{ user, setUser, signin, signout }}>
      {children}
    </UserContext.Provider>
  );
};

// Hook to easily access the user context within components
export const useUser = () => {
  return useContext(UserContext);
};
