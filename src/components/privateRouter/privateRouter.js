import { Navigate } from "react-router-dom"

const PrivateRouter = ({ children, isAuthenticated }) => {
    if (!isAuthenticated) {
        return <Navigate to='/login' replace={true} />
    }
    return children
}

export default PrivateRouter