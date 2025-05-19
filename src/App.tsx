import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import { useEffect } from 'react';
import {supabase} from './services/supabaseClient';
import { Routes, Route, useNavigate } from 'react-router';
function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange( (_event,session) => {
      if (!session) {
        console.log('User not logged in');
        navigate('/login');
      } else if (session) {
        console.log('User logged in');
        navigate('/');
      }
    });

  }, []);

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
