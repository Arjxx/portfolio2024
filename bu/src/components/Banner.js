import React from 'react';


const bannerStyle = {
    display: 'grid',
    placeItems: 'center',
    height: '100vh', // Full viewport height
    backgroundColor: '#282c34', // Background color
    color: 'white', // Text color
    padding: '20px'
};

const bannerContentStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr', // Two columns
    gridGap: '20px', // Space between columns
    alignItems: 'center', // Center content vertically
    width: '100%',
    maxWidth: '1200px' // Maximum width of the banner
};

const bannerTextStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'left'
};

const bannerTextH1Style = {
    fontSize: '3rem',
    margin: '0'
};

const bannerTextPStyle = {
    fontSize: '1.5rem',
    margin: '10px 0 0'
};

const bannerImageStyle = {
    width: '100%',
    maxWidth: '400px', // Maximum width of the image
    borderRadius: '50%', // Circular image
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' // Image shadow
};

export const Banner = () => {
    return (
        <div style={bannerStyle}>
            <div style={bannerContentStyle}>
                <div style={bannerTextStyle}>
                    <h1 style={bannerTextH1Style}>Your Name</h1>
                    <p style={bannerTextPStyle}>Web Developer | Designer | Programmer</p>
                </div>
                <div>
                    <img style={bannerImageStyle} src="your-image-url.jpg" alt="Your Name" />
                </div>
            </div>
        </div>
    );
};
