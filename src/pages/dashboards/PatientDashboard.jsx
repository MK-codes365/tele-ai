import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaRobot, FaUserMd, FaCalendarAlt, FaHistory, FaComments, FaPrescription } from 'react-icons/fa';
import './PatientDashboard.css';

const PatientDashboard = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const features = [
        {
            icon: FaRobot,
            title: 'AI Health Assistant',
            description: 'Chat with AI to check symptoms and get triage recommendations',
            path: '/dashboard/patient/ai-chat',
            color: '#3b82f6'
        },
        {
            icon: FaUserMd,
            title: 'Find Doctors',
            description: 'Search and consult with specialized doctors',
            path: '/dashboard/patient/doctors',
            color: '#14b8a6'
        },
        {
            icon: FaCalendarAlt,
            title: 'Book Consultation',
            description: 'Schedule or start instant video consultation',
            path: '/dashboard/patient/book',
            color: '#f59e0b'
        },
        {
            icon: FaHistory,
            title: 'My Visits',
            description: 'View visit history and download summaries',
            path: '/dashboard/patient/visits',
            color: '#8b5cf6'
        },
        {
            icon: FaComments,
            title: 'Messages',
            description: 'Chat with your doctor about prescriptions',
            path: '/dashboard/patient/messages',
            color: '#ec4899'
        },
        {
            icon: FaPrescription,
            title: 'Prescriptions',
            description: 'Upload and manage prescriptions, order medicines',
            path: '/dashboard/patient/prescriptions',
            color: '#10b981'
        }
    ];

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) return null;

    return (
        <div className="patient-dashboard">
            <div className="dashboard-header">
                <div>
                    <h1>Welcome, {user.name}</h1>
                    <p className="subtitle">Your Health Dashboard</p>
                </div>
                <button onClick={logout} className="logout-btn">Logout</button>
            </div>

            <div className="features-grid">
                {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                        <div 
                            key={index}
                            className="feature-card"
                            onClick={() => navigate(feature.path)}
                            style={{ borderLeft: `4px solid ${feature.color}` }}
                        >
                            <Icon style={{ fontSize: '3rem', color: feature.color }} />
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default PatientDashboard;
