

import React, { useState } from 'react'; 

const Contact = () => {
   
    const [contactFormData, setContactFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    
    const [subscribeEmail, setSubscribeEmail] = useState('');

    

    
    const handleContactChange = (e) => {
        const { id, value } = e.target;
        setContactFormData(prevData => ({
            ...prevData,
            
            [id]: value 
        }));
    };

   
    const handleSubscribeChange = (e) => {
        setSubscribeEmail(e.target.value);
    };

   
    const handleContactSubmit = (e) => {
        e.preventDefault(); 
        
        console.log('--- Contact Form Submitted ---');
        console.log(contactFormData); 

       
    };


    const handleSubscribeSubmit = (e) => {
        e.preventDefault(); 
        
        console.log('--- Subscribe Form Submitted ---');
        console.log({ email: subscribeEmail }); 

       
    };

    return (
        <section id="contact" className="container py-5">
            <h2>Contact us</h2>
            <div className="row g-4 mt-2">
                <div className="col-md-6">
                    {}
                    <form id="contactForm" onSubmit={handleContactSubmit}> 
                        
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <input 
                                className="form-control" 
                                id="name" 
                                required
                               
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
                                id="email" 
                                required
                               
                                name="email"
                                value={contactFormData.email}
                                onChange={handleContactChange}
                            />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Message</label>
                            <textarea 
                                className="form-control" 
                                id="message" 
                                rows="4" 
                                required
                                
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
                        {}
                        <form id="subscribeForm" className="d-flex" onSubmit={handleSubscribeSubmit}>
                            <input 
                                className="form-control me-2" 
                                placeholder="your@email.com" 
                                required
                               
                                name="subscribeEmail" 
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