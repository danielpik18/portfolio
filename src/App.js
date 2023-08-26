import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import AboutMe from "./pages/AboutMe/AboutMe";
import Projects from "pages/Projects/Projects";
import Contact from "pages/Contact/Contact";
import video from "./assets/coding.mp4";
import { useEffect } from "react";

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        navigate("/");
    }, []);

    return (
        <div className="App">
            <section className="App-content">
                <video id="bgVideo" autoPlay loop>
                    <source src={video} type="video/mp4"></source>
                </video>

                <Navbar />

                <div style={{ zIndex: "100" }}>
                    <Routes>
                        <Route path="/" element={<AboutMe />} />

                        <Route path="/portfolio" element={<AboutMe />} />

                        <Route path="/projects" element={<Projects />} />

                        <Route path="/contact" element={<Contact />} />

                        <Route path="*" element={<AboutMe />} />
                    </Routes>
                </div>
            </section>
        </div>
    );
}

export default App;
