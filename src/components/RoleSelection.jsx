import React from 'react';
import { FaUserInjured, FaUserMd, FaUserShield } from 'react-icons/fa';
import './RoleSelection.css';

const RoleSelection = () => {
    return (
        <section className="role-section">
            <div className="container">
                <h2 className="section-title">Who Are You?</h2>
                <div className="role-grid">
                    <button className="role-btn patient" onClick={() => alert('Patient Login')}>
                        <FaUserInjured className="role-icon" />
                        <span>Patient / Health Worker</span>
                    </button>
                    <button className="role-btn doctor" onClick={() => alert('Doctor Login')}>
                        <FaUserMd className="role-icon" />
                        <span>Remote Specialist</span>
                    </button>
                    <button className="role-btn admin" onClick={() => alert('Admin Login')}>
                        <FaUserShield className="role-icon" />
                        <span>Admin Panel</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default RoleSelection;
