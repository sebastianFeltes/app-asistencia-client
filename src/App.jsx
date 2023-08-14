import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Login from "./components/Login";
import { Layout } from "./components/Layout";
import HomeAdmin from "./components/HomeAdmin";
import { DatosDocentes } from "./components/DatosDocentes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/home-admin" element={<HomeAdmin />} />
            <Route path="/datos-docentes" element={<DatosDocentes />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
