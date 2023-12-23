import { debounce } from "lodash";


const textInputs = ({ value, setValue }) => {
    const handleNameChange = debounce((event) => {
        const name = event.target.value
        console.log(name)
        setValue((prevState) => ({ ...prevState, name }))
    }, 1000); // Текст буде виведено через 1сек після закінчення написання

    const handleEmailChange = (event) => {
        const email = event.target.value
        setValue((prevState) => ({ ...prevState, email }))
    };

    return (
        <div className="form">
            {/* <label className="form-label" htmlFor='firstName'>Name: </label>
            < input className="form-input" onChange={handleNameChange} placeholder="Surname" type="text" name='firstName' id="firstName" />
            <br /> */}
            <label className="form-label" htmlFor='email'>Email: </label>
            < input className="form-input" onChange={handleEmailChange} placeholder="Email" type="email" name='email' id="email" />
            <br />
            <input className="form-button" type="submit" />
        </div>
    )
}

export default textInputs