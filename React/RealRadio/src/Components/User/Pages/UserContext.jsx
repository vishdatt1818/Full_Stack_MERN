import { createContext, useState } from "react";

export const UserProvider = createContext();

const UserContext = ({ children }) => {
     const [userId, setUserId] = useState(
        localStorage.getItem("userId")
    );

    const saveUserId = (id) => {
        localStorage.setItem("userId", id);
        setUserId(id);
    };

    const removeUserId = () => {
        localStorage.removeItem("userId");
        setUserId(null);
    };
  return (
    <UserContext.Provider value={{ userId, saveUserId, removeUserId }}>
        <App />
    </UserContext.Provider>
);
}

export default UserContext
