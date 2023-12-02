import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import SearchPage from "./pages/SearchPage";
import About from "./pages/About";
import DetailPage from "./pages/Detailpage";
import ToReadPage from "./pages/ToRead";
import HaveRead from "./pages/HaveRead";

function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>}></Route>
        <Route path="/search-page" element={<SearchPage/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/book-detail-page" element={<DetailPage/>}></Route>
        <Route path="/to-read-page" element={<ToReadPage/>}></Route>
        <Route path="/have-read-page" element={<HaveRead/>}></Route>
      </Routes>
</BrowserRouter>
    </div>
  );
}

export default App;
