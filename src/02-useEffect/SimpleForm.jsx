import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setFormState] = useState({username:'strider', email:'cecilia'})
    
    const {username, email} = formState;

    const onInputChange = ({target}) => {
        const {value, name} = target;
        //console.log({name, value})
        setFormState(
            {
                ...formState,
                [name]: value
            }
        )
    }

    useEffect(() => {
        //console.log('useEffecte call');
    }, []);

    useEffect(() => {
        //console.log('formState change');
    }, [formState]);

    useEffect(() => {
        //console.log('email change');
    }, [email]);
    
    return (
        <>
            <h1>Simple Form</h1>
            <hr />
            <input 
                type="text" 
                className="form-control"
                placeholder="username"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input 
                type="email"
                className="form-control mt-4"
                placeholder="ejemplo@ejemplo.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            {
                (username === 'strider2') && <Message/>
            }
            
        </>
    );
};