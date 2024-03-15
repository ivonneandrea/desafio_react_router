import { Route, Routes } from "react-router-dom";
import BarraNavegacion from "./components/BarraNavegacion"

import HomePage from "./views/HomePage";
import FormularioContacto from "./views/FormularioContacto";
import NotFound from "./views/NotFound";

import "./App.css";

function App() {
    return (
        <>
            <main>
                <BarraNavegacion />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/contact" element={<FormularioContacto/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
        </>
    );
}

export default App;