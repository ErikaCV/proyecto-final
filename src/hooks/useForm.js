import { useState } from "react";

export const useForm = (initialForm = {}) => {

  const [formState, setFormState] = useState(initialForm);

  // del target podemos desectructurar el id, value para  capturar lo escrito
  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState, // necesitamos q guarde los valores de email y password
      [name]: value
    });
  };

  return {
     formState,
      onInputChange
  }
};
