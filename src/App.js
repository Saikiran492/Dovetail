import { Link, Route, Routes } from "react-router-dom";
import RegisterForm from "./components/RegisterForm";
import AnagramTester from "./components/AnagramTester";
import TempTracker from "./components/TempTracker";

function App() {
  return (
    <div>
      <Link className="btn btn-light m-2" to="/register">
        Register
      </Link>
      <Link className="btn btn-light m-2" to="/anagram">
        Anagram
      </Link>
      <Link className="btn btn-light m-2" to="/temp">
        TempTracker
      </Link>
      <div className="mt-3 ms-5">
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/anagram" element={<AnagramTester />} />
          <Route path="/temp" element={<TempTracker />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
