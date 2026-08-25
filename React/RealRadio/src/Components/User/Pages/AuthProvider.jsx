import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {

    const [userId, setUserId] = useState(
        localStorage.getItem("id") || null
    );

    const saveUserId = (id) => {
        localStorage.setItem("id", id);
        setUserId(id);
    };

    const removeUserId = () => {
        localStorage.removeItem("id");
        setUserId(null);
    };

  

    return (
        <AuthContext.Provider
            value={{
                userId,
                saveUserId,
                removeUserId
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;