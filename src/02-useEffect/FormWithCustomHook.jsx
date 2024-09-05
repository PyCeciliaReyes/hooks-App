import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    const {formState, onInputChange, username, email, password, onResetForm} = useForm({
        username:'', 
        email:'', 
        password:''
    });
    // const {username, email, password} = formState;
    
    return (
        <>
            <h1>Formulario con custom hook</h1>
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
            <input 
                type="password"
                className="form-control mt-4"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
            <button onClick={ onResetForm } className="btn btn-primary mt-4">Borrar</button>       
        </>
    );
};