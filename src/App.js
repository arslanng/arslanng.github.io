import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Navbar from "./components/Navbar";
import Context from "./components/Context.js";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Context />
      </div>
      <Footer />
    </>
  );
}

export default App;
