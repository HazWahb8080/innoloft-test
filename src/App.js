import './App.css';
import { Routes, Route } from "react-router-dom";
import Product from './components/page/Product';
import Home from './components/home/Home';



function App() {
  return (
    <div className="h-screen flex flex-col items-start justify-start">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
