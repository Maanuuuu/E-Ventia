import Login from './pages/login';
import Home from './pages/home';
import NotFound from './pages/NotFound';

import { Routes, Route } from 'react-router';
function App() {

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
