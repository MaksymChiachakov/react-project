import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>Home</h1>
            <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default Home