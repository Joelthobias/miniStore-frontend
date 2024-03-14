import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import NavBar from './Components/Navbar/NavBar';
import Cart from "./pages/Cart/Cart";
import AdminDash from "./pages/admin-Dash";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/Admin" element={<AdminDash />}></Route>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
