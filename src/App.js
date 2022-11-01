import { Route, Routes, Navigate } from "react-router-dom";
import NavBar from "./components/navbar";
import { Home } from "./routes/home";
import { Login } from "./routes/login";
import { Register } from "./routes/register";
import { About } from "./routes/about";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
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
