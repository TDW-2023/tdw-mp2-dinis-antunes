import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>  
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
