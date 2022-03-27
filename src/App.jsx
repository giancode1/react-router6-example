import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { UsersPage } from './pages/UsersPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CountPage } from './pages/CountPage';
import { UserPage } from "./pages/UserPage";
import { Dashboard } from "./pages/Dashboard";

import { Navbar } from './components/Navbar';

import 'bulma/css/bulma.css';


function App() {


  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />

        <Route path='/users' element={<UsersPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/usuarios' element={<Navigate to='/users' />} />
        <Route path='/users/:id' element={<UserPage />} />
        <Route path='/users/new' element={<h1>New User</h1>} />
        <Route path='/dashboard/*' element={<Dashboard />} />
        
        <Route path='/count' element={<CountPage />} >
          <Route path='saludo' element={<h1>Te saludo</h1>} />
          <Route path='despedida' element={<h1>Me despido</h1>} />
        </Route> 

        <Route path='*' element={<NotFoundPage />} />

      </Routes>


    </BrowserRouter>
  )
}

export default App
