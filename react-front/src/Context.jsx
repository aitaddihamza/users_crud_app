import { createContext, useContext, useState } from "react";
import axiosClient from "./api/axios-client";

const AppContext = createContext();

const Context = ({ children }) => {
    const [user, _setUser] = useState(
        JSON.parse(localStorage.getItem("userinfos")) || {}
    );
    const [token, _setToken] = useState(
        localStorage.getItem("accessToken") || null
    );

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [notification, _setNotification] = useState(null);

    const setNotification = (message) => {
        _setNotification(message);
        setTimeout(() => {
            _setNotification(null);
        }, 3000);
    };

    const setToken = (token) => {
        _setToken(token);
        localStorage.setItem("accessToken", token);
    };

    const setUser = (user) => {
        _setUser(user);
        localStorage.setItem("userinfos", JSON.stringify(user));
    };

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await axiosClient.get("/users");
            console.log(response.data);
            setUsers(response.data);
        } catch (err) {
            console.err(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContext.Provider
            value={{
                user,
                token,
                setUser,
                setToken,
                users,
                setUsers,
                getUsers,
                loading,
                setLoading,
                notification,
                setNotification,
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
