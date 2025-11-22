import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import './App.css';

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
  </Routes>
);

export default App;
