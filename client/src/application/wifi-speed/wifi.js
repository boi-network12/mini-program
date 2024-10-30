import React, { useState, useEffect } from 'react';
import "./wifi.css";

const WifiSpeed = () => {
    const [speed, setSpeed] = useState(null);
    const [loading, setLoading] = useState(false);

    // Function to calculate download speed
    const testSpeed = async () => {
        const testUrl = ''; // Insert a valid large file URL here
        const fileSizeInBytes = 5000 * 5000; // Adjust file size in bytes based on the image used

        setLoading(true);
        setSpeed(null);
        const startTime = new Date().getTime();

        try {
            const response = await fetch(testUrl, { cache: 'no-store' });

            if (response.ok) {
                const endTime = new Date().getTime();
                const durationInSeconds = (endTime - startTime) / 1000;
                const speedInMbps = ((fileSizeInBytes * 8) / (1024 * 1024)) / durationInSeconds;
                setSpeed(speedInMbps.toFixed(2)); // Update speed state to display the result
            } else {
                throw new Error('Failed to download test file');
            }
        } catch (error) {
            console.error("Speed test failed:", error);
        } finally {
            setLoading(false);
        }
    };

    // Automatically start and continuously update speed test every 5 seconds
    useEffect(() => {
        testSpeed(); // Run once when component mounts

        // Update speed every 5 seconds
        const interval = setInterval(testSpeed, 5000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, []);

    return (
        <div className='wifi-speed-wrapper'>
            <img src={require("../../assets/fast-image-kbp.jfif")} alt="" />
            {loading ? (
                <p>Testing...</p>
            ) : (
                <h3>
                    {speed ? (
                        <>
                            {speed} <span>Mbps</span>
                        </>
                    ) : (
                        "Calculating..."
                    )}
                </h3>
            )}
        </div>
    );
};

export default WifiSpeed;
