import { useFetch } from "../hooks";

export const MultipleCustomHooks = () => {
    const {data, isLoading, hasError} = useFetch('https://pokeapi.co/api/v2/pokemon/3');
    return(
        <>
            <h1> Info de pokemones </h1>
            <hr />

            { isLoading && <p>Cargando...</p> }

            {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
            <h2> {data?.name} </h2>
        </>
    );
};