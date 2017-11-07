import React from 'react'
import EmbedVideo from './EmbedVideo.js'

export const Home = () => <div>
    <h1>Welcome to Dobis PR</h1>
    <h5>A message from our founder Tim Heidecker</h5>
    <div className="full-img">
        <img src={require('./Dobis/FounderPicture.jpg')} />
    </div>
    <div className="full-width">
        <p>
            Here at Dobis we take pride in how we do bis. 
        </p>
    </div>
    <div className="full-width">
        <EmbedVideo extension="YviYufXRw0g" />
    </div>
</div>

export const WhatWeDo = () => <div>
    <h1>What We Do</h1>
    <div className="full-width">
        <p>
            This is what we do.
        </p>
    </div>
    <div className="full-img">
        <img src={require('./Dobis/FoundingPartners.jpg')} />
    </div>
</div>

export const WhoWeAre = () => <div>
    <h1>Who We Are</h1>
    <div className="full-width">
        <p>
            This is who we are. 
        </p>
    </div>
    <div className="full-img">
        <img src={require('./Dobis/WhoWeAre.png')} />
    </div>
</div>

export const Projects = () => <div>
    <h1>Featured Projects</h1>
    <EmbedVideo extension="ZAstVGmzD_0" />
</div>

export const Careers = () => <div>
    <h1>Careers</h1>
    <h3>Mall Janitor</h3>
    <ul>
        <li>Good Taqutor skills</li>
        <li>Experience keeping wolves out</li>
    </ul>
</div>

export const Contact = () => <div>
    <h1>Contact Us</h1>
    <div className="full-width">
        <p>
            1108 Mall Way St.<br />
            Swallow Valley, CE 9832-09
        </p>
    </div>
</div>
