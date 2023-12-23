import './App.css';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import PrivateRouter from './components/privateRouter/privateRouter';
import { useMutation, useQuery } from 'react-query';
import { getAllUsers } from './components/pages/api/api';

function App() {

  const Home = lazy(() => import('./components/pages/home/home'))
  const About = lazy(() => import('./components/pages/about/about'))
  const Contacts = lazy(() => import('./components/pages/contacts/contacts'))
  const NotFound = lazy(() => import('./components/pages/notFound/notFound'))
  const SingleContact = lazy(() => import('./components/pages/singleContact/singleContact'))
  const Layout = lazy(() => import('./components/layout/layout'))
  const Login = lazy(() => import('./components/pages/login/login'))

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


  return (
    <div className="App">
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Layout isFetching={isFetching} isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />}>
              <Route index element={<Home />} />
              <Route path='/contacts' element={<PrivateRouter isAuthenticated={isAuthenticated} ><Contacts /></PrivateRouter>} />
              {/* <Route path='/contacts' element={<Contacts />} /> */}
              <Route path='/contacts/:id' element={<PrivateRouter isAuthenticated={isAuthenticated} ><SingleContact /></PrivateRouter>} />
              <Route path='/about' element={<PrivateRouter isAuthenticated={isAuthenticated} ><About /></PrivateRouter>} />
              <Route path='/404' element={<NotFound />} />
              <Route path='/login' element={<Login setIsAuthenticated={setIsAuthenticated} usersList={usersList} />} />
              <Route path='*' element={<Navigate to='/404' />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
