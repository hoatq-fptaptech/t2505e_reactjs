import { Routes,Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Forecast from "./pages/Forecast";

function App() {
  
  return (
    <div className="App">
       <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/forecast">Forecast</Link>
          </li>
       </ul>
       <main>
        <div className="container">
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/category" Component={Category} />
                <Route path="/cart" Component={Cart} />
                <Route path="/forecast" Component={Forecast} />
            </Routes>
        </div>
       </main>
    </div>
  );
}

export default App;
