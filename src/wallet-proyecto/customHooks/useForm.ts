import React, { useState } from "react";

const useForm = <T>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setValues({
      ...values,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return {
    values,
    handleInputChange,
    setValues,
  };
};

export default useForm;
