// import React from "react";
// import {createRoot} from "react-dom/client"



// const root = createRoot(document.getElementById("main"));

import React from "react"
import { createRoot } from "react-dom/client"

const root = createRoot(document.getElementById("main"));
const paragraph1 = <p style={{color:"orange"}}>This is a Para</p>;
const Innerdiv = () => (<div style={{backgroundColor:"red",color:"white",width:"max-content"}}>This is a div</div>);

const Heading = () => (<h1>Namaste React 💕</h1>);

const Section1 = () => (
    <section id="mainSection">
        {Heading()}
        <div className="continer">
            <div className="box box1"></div>
            <div className="box box2"></div>
        </div>
        <div className="continer1">
            <div className="box box1"></div>
            <div className="box box2"></div>
        </div>
        {paragraph1}
        {Innerdiv()}
        {/* we can also write <Innerdiv /> and <Innerdiv> </Innerdiv>*/}
    </section>
);
root.render(Section1())
