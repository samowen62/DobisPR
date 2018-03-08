import React from 'react'
import EmbedVideo from './EmbedVideo.js'

export const Home = () => <div class="content-wrapper">
    <h1>Welcome to Dobis PR</h1>
    <h5>A message from our founder Tim Heidecker</h5>
    <div className="full-img">
        <img src={`${process.env.PUBLIC_URL}/Dobis/FounderPicture.jpg`} />
    </div>
    <div className="full-width">
        <p className="inspirational-quote">
            "Here at Dobis we take pride in how we do bis. That is what we do and <strong>this</strong> is who we are."
        </p>
    </div>
    <div className="full-width">
        <EmbedVideo extension="YviYufXRw0g" />
    </div>
</div>

export const WhatWeDo = () => <div class="content-wrapper">
    <h1>What We Do</h1>
    <div className="full-width">
        <p>
            This is what we do.
        </p>
    </div>
    <div className="full-img">
        <img src={`${process.env.PUBLIC_URL}/Dobis/WhatWeDo.jpg`} />
    </div>
</div>

export const WhoWeAre = () => <div class="content-wrapper">
    <h1>Who We Are</h1>
    <div className="full-width">
        <p>
            This is who we are. 
        </p>
    </div>
    <div className="full-img">
        <img src={`${process.env.PUBLIC_URL}/Dobis/FoundingPartners.jpg`} />
        <br />
    </div>
</div>

export const Projects = () => <div class="content-wrapper">
    <h1>Featured Projects</h1>
    <EmbedVideo extension="ZAstVGmzD_0" />
    <div className="full-width">
        <p>
            Dobis PR is currently working on redeveloping the declining Swallow Valley mall. We've worked with 
            wonderful tenants like Reggie of the Used Toilet Paper Discount Warehouse and Dr. Struts of 
            the Shrim Alternative Healing Center to revamp this once vibrant hub of Swallow Valley. Together we
            will restore this historic mall and make a billion dollars.
        </p>
    </div>
</div>

export const Careers = () => <div class="content-wrapper">
    <h1>Careers</h1>
    <div className="full-width">
        <p>
            <h3>Mall Janitor</h3>
            <ul>
                <li>Good Taqutor skills</li>
                <li>Experience fending off wolves</li>
                <li>May live onsite</li>
            </ul>
        </p>
        <p>
            Please submit resumes <a href="mailto:18owenja@muskegonorwayschools.org">here</a>
        </p>
    </div>
</div>

export const Contact = () => <div class="content-wrapper">
    <h1>Contact Us</h1>
    <div className="full-width">
        <p>
            <h3>Address</h3>
            1108 Mall Way St.<br />
            Swallow Valley, CE 9832-09<br />
            <h3>Email</h3>
            <a href="mailto:18owenja@muskegonorwayschools.org">18owenja@muskegonorwayschools.org</a>
        </p>
    </div>
    <div className="full-img">
        <img src={`${process.env.PUBLIC_URL}/Dobis/WhoWeAre.png`} />
    </div>
</div>
