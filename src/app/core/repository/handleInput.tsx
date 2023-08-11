import React, { ChangeEvent } from "react";

export const handleInput = (event: ChangeEvent<HTMLInputElement>, values: any, setValues: React.Dispatch<React.SetStateAction<any>>) => {
    const { name, value } = event.target;
    console.log(value)
    setValues({ ...values, [name]: value })
}