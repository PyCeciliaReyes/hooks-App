import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
    const [counter, setCounter] = useState(10);

    //sirve para memorizar func
    const increment = useCallback((value) =>{
            setCounter( (c) => c + value);
        },[]);

    // const increment = () =>{
    //     setCounter( counter + 1);
    // };


    return(
        <>
            <h1>Call back Hook: {counter} </h1>
            <hr />
            <ShowIncrement increment={increment} />
        </>
    );
};