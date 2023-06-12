import {React, useState} from 'react';
import {Link} from 'react-router-dom';
import './Results.css';
import gagaFinish from "./images/LadyGagaTransparent.png";
import Button from './gagaComponents/Button';
import ResetButton from './gagaComponents/ResetButton';
import Lyrics from './gagaComponents/Lyrics';

export default function Results() {
    return(
        <div className="outer-div">
            <div className='header'>
                <h2> Your</h2>
                <h1> LADY GAGA LYRIC</h1>
                <h2> IS</h2>
                <ResetButton/>
            </div>
            <div className='body'>
                <div className='results-and-pic'>
                    <img src={gagaFinish} alt="gagaImageStanding" className="resize"/>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}