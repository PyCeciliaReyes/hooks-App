import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    useFetch();
    return(
        <>
            <h1> Custom hooks multiples</h1>
        </>
    );
};