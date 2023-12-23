import { useState } from "react";
import inputData from "./inputData";
import TextInputs from "./textInputs";

// npm i lodash (допоміжна бібліотека для використання Debounce у формі)
// npm i formik (допоміжна бібліотека для роботи з формами)

const ControlledForm = () => {
    // А якщо у нас багато значень, ми можемо зробити так:
    const [value, setValue] = useState({
        email: '',

    });

    const handleSubmit = (event) => {
        event.preventDefault(); // Обов'язкова функція (пишемо завжди)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <TextInputs value={value} setValue={setValue} />
            </form>
            <inputData value={value} />
        </>

    )
}
export default ControlledForm