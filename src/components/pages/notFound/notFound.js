import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>NotFound</h1><br />
            <Link to="/" style={{ color: 'black' }}>Press to go home page</Link>
        </div>
    )

}

export default NotFound