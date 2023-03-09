import "./index.css"
import Header from "./components/Header/index"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Pages/Contacto";
import { CartContextProvider } from "./Storage/CartContext";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/Cart/CartWidget";

function App() {
  return (
    <CartContextProvider value={{ user: "Comprador" }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/catalogo/isekai" element={<ItemListContainer categoryid="isekai" />} />
            <Route path="/catalogo/seinen" element={<ItemListContainer categoryid="seinen" />} />
            <Route path="/catalogo/shoujo" element={<ItemListContainer categoryid="shoujo" />} />
            <Route path="/catalogo/shounen" element={<ItemListContainer categoryid="shounen" />} />
            <Route path="/item/:itemid" element={<ItemDetailContainer />}> </Route>
            <Route path="/contacto" element={<Contacto />}></Route>
            <Route path="/cart" element={<CartWidget />}></Route>
            <Route path="*" element={<h1>404: Page not found</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
