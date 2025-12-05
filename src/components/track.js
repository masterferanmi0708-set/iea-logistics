


import React, { useState } from 'react'; 
// Import useState to manage the input field

const Track = () => {
    // 1. State for the Tracking Number input
    const [trackingId, setTrackingId] = useState('');

    // 2. Handler to update state on every keystroke
    const handleTrackingChange = (e) => {
        setTrackingId(e.target.value);
    };

    // 3. Submission handler
    const handleTrackingSubmit = (e) => {
        e.preventDefault(); // Prevents the page from reloading
        
        // CRITICAL STEP: Log the tracking number to the console
        console.log('--- Shipment Tracked ---');
        console.log({ trackingNumber: trackingId }); 

        // Optional: Reset input after logging
        // setTrackingId('');
    };
    
    return (
        <section id="track" className="container py-5">
            <h2>Track a shipment</h2>
            <div className="row g-4 mt-2">
                <div className="col-lg-6">
                    <div className="track-box">
                        {/* 4. Attach the onSubmit handler */}
                        <form id="trackForm" onSubmit={handleTrackingSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Tracking number</label>
                                <input 
                                    id="trackingNumber" 
                                    className="form-control" 
                                    placeholder="IEA123456" 
                                    required
                                    // 5. CRITICAL: Bind input to state
                                    name="trackingNumber"
                                    value={trackingId}
                                    onChange={handleTrackingChange}
                                />
                            </div>

                            <button className="btn btn-primary" type="submit">
                                <i className="bi bi-search"></i> Track
                            </button>
                        </form>

                        <div id="trackResult" className="mt-3"></div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="admin-panel">
                        <h6 className="mb-2">Quick shipment status (demo)</h6>
                        <ul className="list-group list-group-flush small">
                            <li className="list-group-item">IEA123456 — <strong>Delivered</strong> • <span className="text-muted">Apr 18, 2025</span></li>
                            <li className="list-group-item">IEA999999 — <strong>In transit</strong> • <span className="text-muted">Apr 20, 2025</span></li>
                            <li className="list-group-item">IEA000111 — <strong>Awaiting pickup</strong> • <span className="text-muted">Apr 22, 2025</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Track;