import { Routes,Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Cart from "./pages/Cart";
import Forecast from "./pages/Forecast";
import NavComponent from "./components/NavComponent";
import Product from "./pages/Product";
import STATE from "./context/initState";
import { GlobalProvider } from "./context/context";
import { useState } from "react";
function App() {
  const [data,setData] = useState(STATE);
  return (
    <GlobalProvider value={{data,setData}}>
      <div className="App">
        <NavComponent />
        <main>
          <div className="container">
              <Routes>
                  <Route path="/" Component={Home} />
                  <Route path="/category/:slug" Component={Category} />
                  <Route path="/product/:id" Component={Product} />
                  <Route path="/cart" Component={Cart} />
                  <Route path="/forecast" Component={Forecast} />
              </Routes>
          </div>
        </main>
      </div>
    </GlobalProvider>
  );
}

export default App;
