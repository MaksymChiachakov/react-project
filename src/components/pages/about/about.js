import { Button } from "antd"
// import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { decrement, increment, incrementByAmount } from "../../../redux/counter/counterSlice"
import { counterSelector } from "../../../redux/counter/counterSelectors"

// Модифікація коду Counter за допомогою Redux Toolkit
const About = () => {
    const navigate = useNavigate()
    // const [counter, setCounter] = useState(0)
    const dispatch = useDispatch()
    // Для виводу нашого значення користувачу
    const counterValue = useSelector(counterSelector)
    // console.log(counterValue); // Дістаємо об'єкт counter
    // console.log(counterValue.counter.value); // Дістаємо наше значення


    const handleIncrement = () => {
        dispatch(increment())
        // setCounter(prevState => prevState + 1)
    }
    const handleDecrement = () => {
        dispatch(decrement())
        // setCounter(prevState => prevState - 1)
    }
    const handleIncrementByAmount = (amount) => {
        dispatch(incrementByAmount(amount))
        // setCounter(prevState => prevState + amount)
    }
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>About</h1>
            <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
            <p>{counterValue}</p>
            <Button onClick={handleIncrement}>Increment</Button>
            <Button onClick={handleDecrement}>Decrement</Button>
            <Button onClick={() => handleIncrementByAmount(5)}>Increment By Amount</Button>
            {/* Поставили 5, щоб не створювати зайвий input */}
        </>
    )
}

export default About