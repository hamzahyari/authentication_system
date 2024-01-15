import Login from "./components/login";
import Register from "./components/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";

function App() {

  return (
<main className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;