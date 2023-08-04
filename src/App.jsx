import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import { Layout } from './components/Layout'
import HomeAdmin from './components/HomeAdmin'

function App() {

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
