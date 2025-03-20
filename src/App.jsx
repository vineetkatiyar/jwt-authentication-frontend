import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/sign-up";
import Signin from "./pages/sign-in";
import Home from "./components/home";
import UserTable from "./components/user-table";
import Navbar from "./components/navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<Home />} />
          <Route path="/user-table" element={<UserTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
