import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/404";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";


function App() {
  return (
    <div className="container">
      <Navbar />
      <Router >
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route exact path="/Projects" component={ Projects } />
          <Route exact path="/Contact" component={ Contact } />
          <Route component={ NotFound }/>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
