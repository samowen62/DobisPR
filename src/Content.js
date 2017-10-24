import React from 'react'

export const Home = () => <div>
    <h1>Welcome to Dobis PR</h1>
    <h5>A message from our founder Tim Heidecker</h5>
    <div className="full-img">
        <img src={require('./Dobis/FounderPicture.jpg')} />
    </div>
    <div className="full-width">
        <p>
            Here at Dobis we really do good bis!
        </p>
    </div>
    <div className="full-width">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YviYufXRw0g" frameborder="0" allowfullscreen></iframe>
    </div>
</div>

export const WhatWeDo = () => <div>
    <h1>What We Do</h1>
</div>

export const WhoWeAre = () => <div>
    <h1>Who We Are</h1>
</div>

export const Projects = () => <div>
    <h1>Featured Projects</h1>

    <iframe width="560" height="315" src="https://www.youtube.com/embed/ZAstVGmzD_0" frameborder="0" allowfullscreen></iframe>
</div>

export const Careers = () => <div>
    <h1>Careers</h1>
</div>

export const Contact = () => <div>
    <h1>Contact Us</h1>

    <p>1108 Mall Way St.
        Swallow Valley, CE 9832-09</p>
</div>
