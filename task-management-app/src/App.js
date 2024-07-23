import "./App.css";
import HomePage from "./pages/HomePage";
import Signup from "./component/Authentication/Signup";
import Header from "./component/Layout/Header";
import Login from "./component/Authentication/Login";
import AdminPage from "./pages/AdminPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
