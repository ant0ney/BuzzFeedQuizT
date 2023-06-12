import {React, useState} from 'react';
import Heading from "./gagaComponents/Heading";
import gagaWriting from "./images/LadyGagaWriting.png";
import "./Home.css";
import gagaStart from "./images/GagaStart.png";

function Home() {
    return(
        <div className="Home">
            <header className="App-header">
                <h1 className="headerT"> WHAT </h1>
                <img src={gagaWriting} className="App-logo" />
                <h1 className="headerBot"> LYRIC </h1>
                <h1 className="headerBot"> ARE YOU?</h1>
                <a href='/quiz'> <img src={gagaStart} className="gagaStart"></img></a>
            </header>
        </div>
    )
}
export default Home;
<Home />