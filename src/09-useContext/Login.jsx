import { useContext } from "react";
import { userContext } from "./context/UserContext";

export const Login = () => {
    
    const {user, setUser} = useContext(userContext);

    return(
        <>
            <h1>Login Page</h1>
            <hr />
            <pre aria-label="pre">
                {JSON.stringify(user, null, 3 )  }
            </pre>
            <button 
                className="btn btn-primary"
                onClick={ () => setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })  }
            >
                Establecer usuario
            </button>
        </>
    );
};