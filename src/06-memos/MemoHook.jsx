import { useMemo, useState } from 'react';
import{ useCounter } from '../hooks'

const heavyStuff = (iterationNumber=10) => {
    for(let i = 0; i < iterationNumber; i++){
        console.log('Ahi vamos...')
    }
    return `${iterationNumber} iteraciones realizadas `;
}

export const MemoHook = () => {
    
    const {counter, increment}=useCounter(20);
    const [show, setShow] = useState(true);
    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return(
        <>
            <h1>Memo Hook</h1>
            <h1>Counter: <small>{counter}</small> </h1>
            <hr />
            <h4>{memorizedValue}</h4>
            <button
                className="btn btn-primary mt-4"
               onClick={() => increment(10)}
            >
                +
            </button>
            <button
                className='btn btn-outline-primary'
                onClick={() => setShow( !show )}
            >
                Show/Hide{JSON.stringify(show)}
            </button>

        </>
    )
};