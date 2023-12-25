import { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

const Layout = ({ isFetching }) => {

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

    return (
        <>
            <header className="App-header">
                <NavLink className='link' to='/'>Home</NavLink>
                {isAuthenticated && (
                    <>
                        <NavLink to='/contacts' className='link'>Contacts</NavLink>
                        <NavLink to='/about' className='link'>About</NavLink>
                        <Link to='/login' className="link-exit" onClick={() => {
                            setIsAuthenticated(false);
                            localStorage.removeItem('email');
                        }}
                        >
                            Exit
                        </Link>
                    </>
                )}
                {!isAuthenticated && (
                    <div className="container-login">
                        <NavLink to='/login' className='link-imp'>
                            Sign In
                        </NavLink>
                        <NavLink to='/register' className='link-imp'>
                            Sign Up
                        </NavLink>
                    </div>
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