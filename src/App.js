import { Routes,Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Forecast from "./pages/Forecast";
import NavComponent from "./components/NavComponent";

function App() {
  
  return (
    <div className="App">
       <NavComponent />
       <main>
        <div className="container">
            <Routes>
                <Route path="/" Component={Home} />
                <Route path="/category/:slug" Component={Category} />
                <Route path="/cart" Component={Cart} />
                <Route path="/forecast" Component={Forecast} />
            </Routes>
        </div>
       </main>
    </div>
  );
}

export default App;
