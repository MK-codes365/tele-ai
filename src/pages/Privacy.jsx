import React from 'react';

const Privacy = () => {
    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#e2e8f0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#34d399' }}>Privacy Policy</h1>
            <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>Last updated: December 2024</p>
            
            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f1f5f9' }}>1. Data Collection</h2>
                <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
                    We collect personal information such as name, contact details, and medical history only when explicitly provided by you for the purpose of medical triage and consultation.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f1f5f9' }}>2. Data Security</h2>
                <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
                    All patient data is encrypted end-to-end. We use HIPAA-compliant servers and do not share your sensitive health information with third parties without your consent.
                </p>
            </section>

            <section style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#f1f5f9' }}>3. AI Usage</h2>
                <p style={{ lineHeight: '1.6', color: '#cbd5e1' }}>
                    Our AI tools are used for triage and preliminary assessment only. They do not replace professional medical advice. A qualified doctor always reviews the final diagnosis.
                </p>
            </section>
        </div>
    );
};

export default Privacy;
