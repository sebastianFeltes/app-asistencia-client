import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './components/Login'
import { Layout } from './components/Layout'
import HomeAdmin from './components/HomeAdmin'
import AsistenciaAlumnos from './components/AsistenciaAlumnos'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Login/>} />
          <Route path='/home-admin' element={<HomeAdmin/>} />
          <Route path='/asistencia-alumnos' element ={<AsistenciaAlumnos/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
