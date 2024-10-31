import React, { useEffect, useState } from 'react'
import "./WorldClock.css"

const cities = [
    { name: "New York", timezone: "America/New_York" },
    { name: "London", timezone: "Europe/London" },
    { name: "Tokyo", timezone: "Asia/Tokyo" },
    { name: "Sydney", timezone: "Australia/Sydney" },
    { name: "Lagos", timezone: "Africa/Lagos" }
];


const WorldClock = () => {
    const [times, setTimes] = useState({});

    useEffect(() => {
        const updateTime = () => {
            const newTimes = {};
            cities.forEach(city => {
                const time = new Intl.DateTimeFormat('en-us', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    hour12: true,
                    timeZone: city.timezone
                }).format(new Date());
                newTimes[city.name] = time;
            });
            setTimes(newTimes);
        };

        // update every second
        updateTime();
        const interval = setInterval(updateTime, 1000);

        // clear interval on component unmount
        return () => clearInterval(interval);
    }, [])

    return (
        <div className='WorldClockWrapper'>
            <h3>world clock</h3>
            <div className='WorldClock'>
                {cities.map(city => (
                    <div key={city.name} className='CityTime'>
                        <h4>{city.name}</h4>
                        <p>{times[city.name]}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorldClock