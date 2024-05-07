import "./App.css";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="mx-3">
        < Navbar />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
