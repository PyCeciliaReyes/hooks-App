import { useState } from 'react';
import { userContext } from './UserContext';

// const user = {
//     id: 123,
//     name: 'Fernando Herrera',
//     email: 'fernando@google.com'
// }

export const UserProvider = ({ children  }) => {
    const [user, setUser] = useState();
    return(
        // <userContext.Provider value={{ hola:'mundo', user: user }}>
        <userContext.Provider value={{ user, setUser }}>
            {children}
        </userContext.Provider>
    );
};