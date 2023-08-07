import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './components/Login'
import { Layout } from './components/Layout'
import HomeAdmin from './components/HomeAdmin'
import AltaAlumno from './components/AltaAlumno'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
          <Route index element={<Login />} />
          <Route path='/home-admin' element={<HomeAdmin />} />
          <Route path='/alta-alumno' element={<AltaAlumno />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
