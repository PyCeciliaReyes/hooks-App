import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);
    
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


    return {
        formState,
        ...formState,
        onInputChange

    }
}