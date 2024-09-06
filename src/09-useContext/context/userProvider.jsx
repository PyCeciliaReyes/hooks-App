import { userContext } from "./UserContext";


export const UserProvider = ({ children  }) => {

    return(
        <userContext.Provider value={{ hola:'mundo' }}>
            {children}
        </userContext.Provider>
    );
};