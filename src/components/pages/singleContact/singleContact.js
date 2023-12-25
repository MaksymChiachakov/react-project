import { useQuery } from "react-query"
import { useNavigate, useParams } from "react-router-dom"
import { getSingleContact } from "../api/api"
// import { useContext } from "react"
// import { AuthContext } from "../../../context/AuthContext"

const SingleContact = () => {
    const { id } = useParams()
    // console.log(params) // Те, що ввели після '/contact/'
    const navigate = useNavigate()

    // const value = useContext(AuthContext)

    // console.log(value); // Hello World (from `index.js`)




    const { data, isFetching } = useQuery({
        queryKey: ['SingleContact'],
        queryFn: () => getSingleContact(id)
    })

    return isFetching ? (
        <div className="loading">Loading...</div >
    ) : (
        <div>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Last Name:</strong> {data.lastName}</p>
            <p><strong>Age:</strong> {data.age}</p>
            <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default SingleContact