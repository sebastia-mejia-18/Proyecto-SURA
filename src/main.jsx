import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx';
import Registro from './pages/Registro.jsx'
import Acercade from './pages/Acercade.jsx'
import Contacto from './pages/Contacto.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/registro",
    element: <Registro />
  },
  {
    path:"/acercade",
    element: <Acercade/>
  },
  {
    path:"/contacto",
    element: <Contacto/>
  }

]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
