import React from 'react';
import { FaRobot, FaNotesMedical, FaUserMd, FaVideo } from 'react-icons/fa';
import './SolutionSection.css';

const SolutionSection = () => {
    return (
        <section className="solution-section">
            <div className="container">
                <h2 className="section-title">Our Solution</h2>
                <h3 className="solution-headline">
                    A Web Platform That Brings Specialists to Rural Communities Through AI + Telemedicine
                </h3>
                <div className="solution-grid">
                    <div className="feature-card">
                        <FaRobot className="feature-icon" />
                        <h4>AI Triage</h4>
                        <p>Instant urgency scoring to prioritize critical cases.</p>
                    </div>
                    <div className="feature-card">
                        <FaNotesMedical className="feature-icon" />
                        <h4>Smart Case Submission</h4>
                        <p>Upload symptoms, vitals, and media easily.</p>
                    </div>
                    <div className="feature-card">
                        <FaUserMd className="feature-icon" />
                        <h4>Doctor Dashboard</h4>
                        <p>Prioritized case review for efficient diagnosis.</p>
                    </div>
                    <div className="feature-card">
                        <FaVideo className="feature-icon" />
                        <h4>WebRTC Video Consults</h4>
                        <p>Remote, secure, and fast video connections.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SolutionSection;
