import { useQuery } from "react-query"
import { Link, useNavigate } from "react-router-dom"
import { getContactsList } from "../api/api"
import { Fragment } from "react"

const Contact = () => {
    const navigate = useNavigate()

    const { data, isFetching } = useQuery({
        queryKey: ['contactsList'],
        queryFn: getContactsList,
        refetchOnMount: true
    })



    return (
        <>
            <h1>Contacts</h1>
            <ul>
                {isFetching ? (
                    <div className="loading">Loading...</div>
                ) : (

                    data?.map((contact) => (
                        <Fragment key={contact.id}>
                            <li >
                                <p>
                                    <strong>{contact.name} {contact.lastName}</strong>
                                </p>
                            </li>

                            <Link style={{ color: 'blue' }} to={`${contact.id}`} >Watch about this character</Link>

                        </Fragment>


                    ))
                )}

            </ul >
            <button className="go-back-button" onClick={() => navigate(-1)}>Go Back</button>
        </>
    )

}

export default Contact