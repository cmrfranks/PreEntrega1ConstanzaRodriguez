import "./index.css"
import Header from "./components/Header/index"
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Mangas from './components/Mangas/Mangas';
import Card  from './components/Card/Card';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={ <ItemListContainer greeting="Welcome to Arashi Manga Store"/>}></Route>
        <Route path="/catalogo" element= {<Mangas/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
    );
}

export default App;
