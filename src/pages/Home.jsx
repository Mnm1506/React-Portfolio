import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "./components/Navbar";

const Home = () => {
    const [project] = useState([    ])
    return(
        <div>
            <Navbar />
            <Header />
            <Projects project={project} />
           
        </div>
    )
}

export default Home;