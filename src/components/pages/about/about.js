import { useNavigate } from "react-router-dom"

const About = () => {
    const navigate = useNavigate()
    return (
        <>
            <h1 style={{ textAlign: 'center' }}>About</h1>
            <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
        </>
    )
}

export default About