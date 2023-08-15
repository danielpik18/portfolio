import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "pages/Projects/Projects";
import Contact from "pages/Contact/Contact";

function App() {
    return (
        <div className="App">
            <section className="App-content">
                <Navbar />

                <Routes>
                    <Route path="/about-me" element={<AboutMe />} />

                    <Route path="/projects" element={<Projects />} />

                    <Route path="/contact" element={<Contact />} />

                    <Route path="*" element={<AboutMe />} />
                </Routes>
            </section>
        </div>
    );
}

export default App;
