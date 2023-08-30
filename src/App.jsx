import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.sscss";
import Login from "./components/Login";
import { Layout } from "./components/Layout";
import HomeAdmin from "./components/HomeAdmin";
import DataCursos from "./components/DataCursos";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient =new QueryClient();
//TODO: LOS CAMPOS SE TIENE QUE AUTOCOMPLETAR SI EXISTE EL DOCENTE
//AL HACERLE "BLUR"

  return (
    
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
            <Route path="/data-cursos" element={<DataCursos />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </QueryClientProvider>
  );
}

export default App;
