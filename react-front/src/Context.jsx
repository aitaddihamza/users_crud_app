import { createContext, useContext } from "react";

const AppContext = createContext();

const Context = ({ children }) => {
    const [user, setUser] = useState({
        name: "Jack",
    });
    const [token, setToken] = useState(null);

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

export const useValue = () => useContext(AppContext);
