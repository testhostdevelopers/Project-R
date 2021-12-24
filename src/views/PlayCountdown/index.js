import './style.scss'
import React from "react";
import { Link } from "react-router-dom";

import Counter from './Counter';


export default function PlayCountdown({}) {



    return (
        <div className="main-wrapper">
            <section className="play-page full-screen">
                <div className="container">
                    <div className='counter-live'>
                        <div className='counter-wrap'>
                            <Counter/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

