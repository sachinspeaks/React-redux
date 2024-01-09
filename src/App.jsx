import { useState } from "react";
import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/cake">Cake</Link>
        <Link to="/icecream">IceCream</Link>
        <Link to="/user">User</Link>
      </div>
      <Outlet />
    </>
  );
}

export default App;
