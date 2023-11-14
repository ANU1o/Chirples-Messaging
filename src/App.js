import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Setting from "./pages/Setting";
import People from "./pages/People";

function App() {
  return (
    <div className="App d-flex bg-body-secondary user-select-none flex-column flex-lg-row min-vh-100 overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Login Register />} />
        <Route path="/Chat" element={<Home />} />
        <Route path="/Setting" element={<Setting />} />
        <Route path="/People" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;
