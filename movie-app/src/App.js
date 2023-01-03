import { useEffect, useState } from "react";
import Movie from "./components/Movie.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home.js";
import Detail from "./routes/Detail";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/movie/:id' element={<Detail />}></Route>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
