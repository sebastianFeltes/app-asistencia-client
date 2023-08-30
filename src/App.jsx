import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import { Layout } from "./components/Layout";
import HomeAdmin from "./components/HomeAdmin";
import { DatosDocentes } from "./components/DatosDocentes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.scss";
import DataCursos from "./components/DataCursos";
import AsistenciaAlumnos from "./components/AsistenciaAlumnos";
import "./App.scss";
import AltaAlumno from "./components/AltaAlumno";
import AltaDocente from "./components/AltaDocente";
import DataAlumnos from "./components/DataAlumnos";


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
            <Route path="/alta-alumno" element={<AltaAlumno />} />
            <Route path="/datos-docentes" element={<DatosDocentes />} />
            <Route path="/data-cursos" element={<DataCursos />} />
            <Route path="/asistencia-alumnos" element={<AsistenciaAlumnos />} />
            <Route path="/alta-docente" element={<AltaDocente />} />
            <Route path="/datos-alumnos" element={<DataAlumnos />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
