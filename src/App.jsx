import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="mx-3">
        < Navbar />
        <Outlet />
      </main>
    </>
  );
}

export default App;
