import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>About</h1>
            <button onClick={() => navigate(-1)}>Повернутися назад</button>
        </>
    )
}

export default About