import "./index.css"
import Header from "./components/Header/index"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Pages/Contacto";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }></Route>
        <Route path="/item/:itemid" element= {<ItemDetailContainer/>}> </Route>
        <Route path="/contacto" element= {<Contacto/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
