import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Home } from "./routes/Home";
import { Login } from "./routes/Login";
import { Register } from "./routes/Register";
import { About } from "./routes/About";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
