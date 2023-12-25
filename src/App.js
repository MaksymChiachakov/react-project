import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useEffect, useState } from 'react';
import PrivateRouter from './components/privateRouter/privateRouter';
import { AuthContext } from './context/AuthContext';
import { useDispatch } from 'react-redux';
import { fetchUsers } from './redux/users/userSlice';

function App() {

  const Home = lazy(() => import('./components/pages/home/home'))
  const About = lazy(() => import('./components/pages/about/about'))
  const Contacts = lazy(() => import('./components/pages/contacts/contacts'))
  const NotFound = lazy(() => import('./components/pages/notFound/notFound'))
  const SingleContact = lazy(() => import('./components/pages/singleContact/singleContact'))
  const Layout = lazy(() => import('./components/layout/layout'))
  const Login = lazy(() => import('./components/pages/login/login'))
  const Register = lazy(() => import('./components/pages/register/register'))

  const [loginUser, setLoginUser] = useState({ username: null, email: null })
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('email')
  )

  const dispatch = useDispatch()

  // const isLoading = useSelector(state => state.users.loading)


  // const { data: usersList, isFetching } = useQuery({
  //   queryKey: ['usersList'],
  //   queryFn: getAllUsers,
  //   refetchOnReconnect: false,
  //   refetchOnWindowFocus: false
  // })

  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])

  // npm install @reduxjs/toolkit

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <main>
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/contacts' element={<PrivateRouter  ><Contacts /></PrivateRouter>} />
                {/* <Route path='/contacts' element={<Contacts />} /> */}
                <Route path='/contacts/:id' element={<PrivateRouter ><SingleContact /></PrivateRouter>} />
                <Route path='/about' element={<PrivateRouter  ><About /></PrivateRouter>} />
                <Route path='/404' element={<NotFound />} />
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<Navigate to='/404' />} />
                <Route path='/register' element={<Register />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
