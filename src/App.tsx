import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gamepasses from "./components/Gamepasses";
import Checkout from "./components/Checkout";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gamepasses" element={<Gamepasses />}></Route>
        <Route path="/checkout" element={<Checkout />}/>
      </Routes>
    </Router>
  )
}