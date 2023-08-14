import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Login from './components/Login'
import { Layout } from './components/Layout'
import HomeAdmin from './components/HomeAdmin'

function App() {
//TODO: LOS CAMPOS SE TIENE QUE AUTOCOMPLETAR SI EXISTE EL DOCENTE
//AL HACERLE "BLUR"

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>} >
          <Route index element={<Login/>} />
          <Route path='/home-admin' element={<HomeAdmin/>} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
