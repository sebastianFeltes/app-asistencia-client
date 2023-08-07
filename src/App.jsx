import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { Layout } from './components/Layout'
import HomeAdmin from './components/HomeAdmin'
import DatosAlumnos from './components/DatosAlumnos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Login/>} />
          <Route path='/home-admin' element={<HomeAdmin/>} />
          <Route path='/datos-alumnos' element={<DatosAlumnos/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
