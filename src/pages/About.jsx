import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#e2e8f0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#38bdf8' }}>About Us</h1>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                At Telemedicine + AI Diagnostic, we believe that quality healthcare should be accessible to everyone, regardless of where they live. Our mission is to bridge the gap between rural communities and specialized medical care using cutting-edge artificial intelligence and seamless video connectivity.
            </p>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8' }}>
                We are dedicated to reducing travel times, lowering costs, and saving lives through early diagnosis and rapid intervention.
            </p>
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                <h3 style={{ color: '#f472b6', marginBottom: '1rem' }}>Our Team</h3>
                <p>Built with ❤️ by the <strong>Fantastic Four</strong>.</p>
            </div>
        </div>
    );
};

export default About;
