import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <div className="hero-section">
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-badge">AI-Powered Healthcare</div>
                <h1 className="hero-headline">
                    Instant AI-Powered Triage & Remote Specialist Care for Rural Communities
                </h1>
                <p className="hero-subtext">
                    Submit symptoms, get AI urgency scoring, and connect with doctors without traveling long distances.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={() => alert("Flow starting soon...")}>Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
