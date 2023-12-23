import { Link, NavLink, Outlet } from "react-router-dom"

const Layout = ({ isFetching, setIsAuthenticated, isAuthenticated }) => {

    return (
        <>
            <header className="App-header">
                <NavLink className='link' to='/'>Home</NavLink>
                {isAuthenticated && (
                    <>
                        <NavLink to='/contacts' className='link'>Contacts</NavLink>
                        <NavLink to='/about' className='link'>About</NavLink>
                        <Link to='/login' onClick={() => {
                            setIsAuthenticated(false);
                            localStorage.removeItem('email');
                        }}
                        >
                            Log Out
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <NavLink to='/login' className='link'>
                        Login
                    </NavLink>
                )}

            </header>
            <main>
                {isFetching ? <div>Loading...</div> : <Outlet />}
            </main>
            <footer className="footer">All rights... 2023 &#128540;</footer>
        </>
    )

}

export default Layout