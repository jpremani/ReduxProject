import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Product from "./Product";
// import '../node_modules/bootstrap/dist/css/bootstrap.css';

import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Dashboard";
import Cart from "./Cart";
import RootLayout from "./RootLayout";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RootLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
