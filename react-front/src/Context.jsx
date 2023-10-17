import { createContext, useContext, useState } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
    const [user, _setUser] = useState(
        JSON.parse(localStorage.getItem("userinfos")) || {}
    );
    const [token, _setToken] = useState(
        localStorage.getItem("accessToken") || null
    );

    const setToken = (token) => {
        _setToken(token);
        localStorage.setItem("accessToken", token);
    };

    const setUser = (user) => {
        _setUser(user);
        localStorage.setItem("userinfos", JSON.stringify(user));
    };

    return (
        <AppContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default Context;

export const useValue = () => {
    return useContext(AppContext);
};
