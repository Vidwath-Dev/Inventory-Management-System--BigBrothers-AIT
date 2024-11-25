import React from 'react';


const Contact = () => {
    return (
        <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <img src="Hack_Logo-removebg-preview.png" alt="logo" style={{ width: 500,marginLeft:400 }} />
            <h1 style={{marginLeft:590 }}>Contact Us</h1>
            

            <h2>Our Contact Information</h2>
            <p style={{ fontSize: '16px', color: '#555' }}>
                <strong>Phone:</strong> +1 (800) 123-4567 <br />
                <strong>Email:</strong> support@example.com <br />
                <strong>Address:</strong> 1234 Example St, City, State, 12345 <br />
                <strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM
            </p>

            <h2>Get in Touch</h2>
            <p>Fill out the form below to contact us directly:</p>
            
            <form>
                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="name" style={{ fontSize: '16px' }}>Name:</label><br />
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="Your Name" 
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }} 
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="email" style={{ fontSize: '16px' }}>Email:</label><br />
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Your Email" 
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }} 
                    />
                </div>

                <div style={{ marginBottom: '10px' }}>
                    <label htmlFor="message" style={{ fontSize: '16px' }}>Message:</label><br />
                    <textarea 
                        id="message" 
                        name="message" 
                        placeholder="Your Message" 
                        rows="4" 
                        style={{ width: '100%', padding: '8px', fontSize: '16px' }}
                    ></textarea>
                </div>

                <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007BFF', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Contact;
