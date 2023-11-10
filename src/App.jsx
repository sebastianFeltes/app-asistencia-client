import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import { AppLayout } from "./components/AppLayout";
import HomeAdmin from "./components/HomeAdmin";
import { DatosDocentes } from "./components/DatosDocentes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import DataCursos from "./components/DatosCursos";
import AsistenciaAlumnos from "./components/AsistenciaAlumnos";
import AltaAlumno from "./components/AltaAlumno";
import AltaDocente from "./components/AltaDocente";
import DatosAlumnos from "./components/DatosAlumnos";
import LectorQR from "./components/LectorQR";
import GeneradorQR from "./components/GeneradorQR";
import UserState from "./context/userState";
import { Layout } from "./components/Layout";
import HistorialAlumnos from "./components/HistorialAlumnos";

function App() {
  const queryClient = new QueryClient();
  return (
    <UserState>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
            </Route>

            <Route path="/app" element={<AppLayout />}>
              <Route path="/app/home-admin" element={<HomeAdmin />} />
              <Route path="/app/alta-alumno" element={<AltaAlumno />} />
              <Route path="/app/datos-docentes" element={<DatosDocentes />} />
              <Route path="/app/datos-cursos" element={<DataCursos />} />
              <Route
                path="/app/asistencia-alumnos"
                element={<AsistenciaAlumnos />}
              />
              <Route path="/app/alta-docente" element={<AltaDocente />} />
              <Route path="/app/datos-alumnos" element={<DatosAlumnos />} />
              <Route path="/app/historial-alumnos" element={<HistorialAlumnos />} />

              <Route path="/app/lector-qr" element={<LectorQR />} />
              <Route path="/app/generador-qr" element={<GeneradorQR />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </UserState>
  );
}

export default App;
