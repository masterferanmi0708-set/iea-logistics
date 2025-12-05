

import React, { useState } from 'react'; // 1. Import useState hook

const Contact = () => {
    // 2. State for the Contact Form fields
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // 3. State for the Subscribe Form field
    const [subscribeEmail, setSubscribeEmail] = useState('');

    // --- HANDLERS ---

    // 4. Universal handler for Contact Form changes
    const handleContactChange = (e) => {
        const { id, value } = e.target;
        setContactFormData(prevData => ({
            ...prevData,
            // Use the input's ID (or name) to update the corresponding state key
            [id]: value 
        }));
    };

    // 5. Handler for Subscribe Form email change
    const handleSubscribeChange = (e) => {
        setSubscribeEmail(e.target.value);
    };

    // 6. Submission handler for Contact Form
    const handleContactSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        
        console.log('--- Contact Form Submitted ---');
        console.log(contactFormData); // Data is logged here!

        // Optional: Reset form after submission
        // setContactFormData({ name: '', email: '', message: '' });
    };

    // 7. Submission handler for Subscribe Form
    const handleSubscribeSubmit = (e) => {
        e.preventDefault(); // Prevent page reload
        
        console.log('--- Subscribe Form Submitted ---');
        console.log({ email: subscribeEmail }); // Data is logged here!

        // Optional: Reset form after submission
        // setSubscribeEmail('');
    };

    return (
        <section id="contact" className="container py-5">
            <h2>Contact us</h2>
            <div className="row g-4 mt-2">
                <div className="col-md-6">
                    {/* Attach the onSubmit handler */}
                    <form id="contactForm" onSubmit={handleContactSubmit}> 
                        
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                className="form-control" 
                                id="name" // Changed to 'name' for simplicity in state key
                                required
                                // CRITICAL: Link to state
                                name="name"
                                value={contactFormData.name}
                                onChange={handleContactChange}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Email</label>
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email" // Changed to 'email' for simplicity
                                required
                                // CRITICAL: Link to state
                                name="email"
                                value={contactFormData.email}
                                onChange={handleContactChange}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                id="message" // Changed to 'message' for simplicity
                                rows="4" 
                                required
                                // CRITICAL: Link to state
                                name="message"
                                value={contactFormData.message}
                                onChange={handleContactChange}
                            ></textarea>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Send message</button>
                    </form>
                </div>
                
                <div className="col-md-6">
                    <div className="admin-panel">
                        <h6>Office</h6>
                        <p className="mb-1 small text-muted">England, UK — Phone: +44 1483 853085</p>
                        <p className="small text-muted">Email: info@iealogistics.com</p>

                        <hr/>
                        <h6 className="mb-2">Subscribe for updates</h6>
                        {/* Attach the onSubmit handler */}
                        <form id="subscribeForm" className="d-flex" onSubmit={handleSubscribeSubmit}>
                            <input 
                                className="form-control me-2" 
                                placeholder="your@email.com" 
                                required
                                // CRITICAL: Link to state (using only 'email' here)
                                name="subscribeEmail" // Added name attribute
                                value={subscribeEmail}
                                onChange={handleSubscribeChange}
                            />
                            <button className="btn btn-outline-primary">Subscribe</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;