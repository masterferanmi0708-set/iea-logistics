


import React, { useState } from 'react'; 


const Track = () => {
    
    const [trackingId, setTrackingId] = useState('');

    
    const handleTrackingChange = (e) => {
        setTrackingId(e.target.value);
    };

    
    const handleTrackingSubmit = (e) => {
        e.preventDefault(); 
        
        
        console.log('--- Shipment Tracked ---');
        console.log({ trackingNumber: trackingId }); 

        
    };
    
    return (
        <section id="track" className="container py-5">
            <h2>Track a shipment</h2>
            <div className="row g-4 mt-2">
                <div className="col-lg-6">
                    <div className="track-box">
                        <form id="trackForm" onSubmit={handleTrackingSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Tracking number</label>
                                <input 
                                    id="trackingNumber" 
                                    className="form-control" 
                                    placeholder="IEA123456" 
                                    required
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