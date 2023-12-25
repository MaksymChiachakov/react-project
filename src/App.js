import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PrivateRouter from './components/privateRouter/privateRouter';
import { useMutation, useQuery } from 'react-query';
import { getAllUsers } from './components/pages/api/api';
import { AuthContext } from './context/AuthContext';

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


  const { data: usersList, isFetching } = useQuery({
    queryKey: ['usersList'],
    queryFn: getAllUsers,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false
  })

  // npm install @reduxjs/toolkit

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      <div className="App">
        <main>
          <Suspense fallback={<div className='loading'>Loading...</div>}>
            <Routes>
              <Route path='/' element={<Layout isFetching={isFetching} />}>
                <Route index element={<Home />} />
                <Route path='/contacts' element={<PrivateRouter  ><Contacts /></PrivateRouter>} />
                {/* <Route path='/contacts' element={<Contacts />} /> */}
                <Route path='/contacts/:id' element={<PrivateRouter ><SingleContact /></PrivateRouter>} />
                <Route path='/about' element={<PrivateRouter  ><About /></PrivateRouter>} />
                <Route path='/404' element={<NotFound />} />
                <Route path='/login' element={<Login usersList={usersList} />} />
                <Route path='*' element={<Navigate to='/404' />} />
                <Route path='/register' element={<Register usersList={usersList} />} />
              </Route>
            </Routes>
          </Suspense>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
