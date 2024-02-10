import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import NavBar from './NavBar';
import Cart from "./Cart";

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>

    </Router>
  );
}

export default App;
