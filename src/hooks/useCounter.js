import { useState } from "react";

export const useCounter = (initialValue = 10) => {
    const [counter, setCounter]= useState(initialValue)
    const increment = ( value = 1 ) => {
        setCounter( counter + value );
    }
    const decrement = ( value = 1 ) => {
        //si llega a 0 que no haga nada
        //if (counter === 0) return;
        setCounter( counter - value );
    }
    const reset = () => {
        setCounter ( initialValue );
    }



    return {
        counter,
        increment,
        decrement,
        reset,
    };
};