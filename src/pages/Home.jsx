import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";

const Home = () => {
    const [project] = useState([    ])
    return(
        <div>
            <Header />
            <Navbar />
            <Projects project={project} />
           
        </div>
    )
}

export default Home;