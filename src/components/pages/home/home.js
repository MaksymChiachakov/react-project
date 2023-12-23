import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Home</h1>
            <button onClick={() => navigate(-1)}>Повернутися назад</button>
        </>
    )
}

export default Home