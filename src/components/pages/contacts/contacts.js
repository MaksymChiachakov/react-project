import { useQuery } from "react-query"
import { Link } from "react-router-dom"
import { getContactsList } from "../api/api"
import { Fragment } from "react"

const Contact = () => {
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
                    <div>Loading...</div>
                ) : (

                    data?.map((contact) => (
                        <Fragment key={contact.id}>
                            <li >
                                <p>
                                    {contact.name}{contact.lastName}
                                </p>
                            </li>

                            <Link style={{ color: 'blue' }} to={`${contact.id}`} >Watch about this character</Link>
                        </Fragment>

                    ))
                )}
            </ul >
        </>
    )

}

export default Contact