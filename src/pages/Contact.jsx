import React from 'react';

const Contact = () => {
    return (
        <div style={{ padding: '8rem 2rem', maxWidth: '800px', margin: '0 auto', color: '#e2e8f0' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '2rem', color: '#38bdf8' }}>Contact Us</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
                Have questions or need support? Reach out to our team.
            </p>
            
            <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Name</label>
                    <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #475569', background: '#1e293b', color: 'white' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Email</label>
                    <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #475569', background: '#1e293b', color: 'white' }} />
                </div>
                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold' }}>Message</label>
                    <textarea rows="5" placeholder="How can we help?" style={{ width: '100%', padding: '1rem', borderRadius: '8px', border: '1px solid #475569', background: '#1e293b', color: 'white' }}></textarea>
                </div>
                <button type="button" style={{ padding: '1rem 2rem', background: '#3b82f6', color: 'white', border: 'none', borderRadius: '8px', fontSize: '1.1rem', cursor: 'pointer', fontWeight: 'bold' }}>Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
