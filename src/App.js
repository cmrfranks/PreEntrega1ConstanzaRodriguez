import "./index.css"
import Header from "./components/Header/index"
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contacto from "./components/Pages/Contacto";
import ItemDetail from "./components/ItemDetail/ItemDetail";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <ItemListContainer/> }></Route>
        <Route path="/item/:itemid" element= {<ItemDetail/>}> </Route>
        <Route path="/contacto" element= {<Contacto/>}></Route>
        <Route path="*" element= {<h1>404: Page not found</h1>}/>
      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
