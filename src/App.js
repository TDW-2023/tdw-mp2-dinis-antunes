import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import DetailPage from "./pages/Detailpage";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/book-detail-page" element={<DetailPage/>}></Route> 
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
