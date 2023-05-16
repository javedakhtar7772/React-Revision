import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Signup from './components/Signup';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import NotFound from './components/NotFound';
import EventHandling from './components/EventHandling';
import Navbar from './components/Navbar';
import StateManagemet from './components/StateManagemet';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'element={<Navigate to='/home' />} />
          <Route path='home'element={<Home />} />
          <Route path='signup'element={<Signup />} />
          <Route path='login'element={<Login />} />
          <Route path='event'element={<EventHandling />} />
          <Route path='navbar'element={<Navbar />} />
          <Route path='statemanagement'element={<StateManagemet />} />


          <Route path='/*'element={<NotFound />} />





        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
