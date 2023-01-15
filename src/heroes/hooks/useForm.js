import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const onInputChange = ({target}) => {

        const {name, value} = target;

        setFormState({
          ...formState,
          [name]: value
        })
        
    };

    const onInputReset = () => {
        setFormState(initialForm);
    }

    return {
        ...formState,
        onInputChange,
        onInputReset
    }

}