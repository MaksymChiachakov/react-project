import { useQuery } from "react-query"
import { useParams } from "react-router-dom"
import { getSingleContact } from "../api/api"

const SingleContact = () => {
    const { id } = useParams()
    // console.log(params) // Те, що ввели після '/contact/'

    const { data, isFetching } = useQuery({
        queryKey: ['SingleContact'],
        queryFn: () => getSingleContact(id)
    })

    return isFetching ? (
        <div>Loading...</div >
    ) : (
        <div>
            <p><strong>Name:</strong> {data.name}</p>
            <p><strong>Last Name:</strong> {data.lastName}</p>
            <p><strong>Age:</strong> {data.age}</p>
        </div>
    )
}

export default SingleContact