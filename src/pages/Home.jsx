import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import Projects from "../components/Projects"

const Home = () => {
    const [project] = useState([    ])
    return(
        <div>
            <Header />
            <Projects project={project} />
           
        </div>
    )
}

export default Home;