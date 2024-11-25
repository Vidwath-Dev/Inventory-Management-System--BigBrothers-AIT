import React from 'react';

const About = () => {
    return (
        <div>
            
            <img src="Hack_Logo-removebg-preview.png" alt="logo" style={{ width: 500,marginLeft:400 }} />
            <h1 style={{marginLeft:590 }}>About Us</h1>

            <main style={{ padding: '20px', maxWidth: '1200px', margin: '0 auto' }}>
                <section style={{ backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <h2 style={{ color: '#333' }}>Who We Are</h2>
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        We are a passionate team dedicated to delivering the best services in the industry. 
                        Our company was founded with the goal of solving real-world problems through innovative 
                        solutions and exceptional customer service. With a strong focus on quality, we aim to create
                        products that not only meet but exceed expectations.
                    </p>
                </section>

                <section style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <h2 style={{ color: '#333' }}>Our Mission</h2>
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        Our mission is to create innovative and impactful solutions that improve people's lives 
                        across the globe. We are committed to maintaining high standards of integrity, transparency, 
                        and social responsibility while delivering top-notch results for our clients.
                    </p>
                </section>

                <section style={{ marginTop: '30px', backgroundColor: 'white', padding: '20px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
                    <h2 style={{ color: '#333' }}>Our Values</h2>
                    <ul style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        <li>Integrity and transparency in all we do</li>
                        <li>Commitment to innovation and excellence</li>
                        <li>Passion for helping our clients succeed</li>
                        <li>Respect for the people and communities we serve</li>
                        <li>Teamwork and collaboration to achieve goals</li>
                    </ul>
                </section>
            </main>
        </div>
    );
};

export default About;
