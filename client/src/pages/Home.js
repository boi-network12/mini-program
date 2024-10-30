import React from 'react';
import './Home.css';
import Signture_design_img from '../assets/signature-app.png';
import world_clock from '../assets/world-clock.jfif';
import wifi_speed from '../assets/wifi-speed.jfif';
import translate_image from '../assets/translate-image.png';
import { Link } from 'react-router-dom';

const boxesData = [
    {
        id: 1,
        title: "Popular",
        apps: [
            {
                id: 1,
                label: "Signature",
                link: "/signature",
                icon: Signture_design_img,
            },
            {
                id: 2,
                label: "World Clock",
                link: "/world-clock",
                icon: world_clock,
            },
        ],
        hasButtons: true,
    },
    {
        id: 2,
        title: "Utilities",
        apps: [
            {
                id: 3,
                label: "Calculator",
                link: "/calculator",
                icon: wifi_speed,
            },
            {
                id: 4,
                label: "Weather",
                link: "/weather",
                icon: wifi_speed,
            },
        ],
        hasButtons: false,
    },
    {
        id: 3,
        title: "Utilities",
        apps: [
            {
                id: 3,
                label: "Calculator",
                link: "/calculator",
                icon: wifi_speed,
            },
            {
                id: 4,
                label: "Weather",
                link: "/weather",
                icon: wifi_speed,
            },
        ],
        hasButtons: false,
    },
    {
        id: 4,
        title: "Utilities",
        apps: [
            {
                id: 3,
                label: "Calculator",
                link: "/calculator",
                icon: wifi_speed,
            },
            {
                id: 4,
                label: "Weather",
                link: "/weather",
                icon: wifi_speed,
            },
        ],
        hasButtons: false,
    },
    {
        id: 5,
        title: "Utilities",
        apps: [
            {
                id: 3,
                label: "Calculator",
                link: "/calculator",
                icon: wifi_speed,
            },
            {
                id: 4,
                label: "Weather",
                link: "/weather",
                icon: wifi_speed,
            },
        ],
        hasButtons: false,
    },
    // Add more boxes as needed
];

const Home = () => {
    return (
        <div className='homeWrapper'>
            {boxesData.map((box) => (
                <div key={box.id} className='box'>
                    <h3>{box.title}</h3>
                    {box.hasButtons && (
                        <div className='second-box speed-trans'>
                            <Link>
                                <img src={wifi_speed} alt="" />
                            </Link>
                            <Link>
                                <img src={translate_image} alt="" />
                            </Link>
                        </div>
                    )}
                    <div className='app-list'>
                        {box.apps.map((app) => (
                            <Link to={app.link} key={app.id} className='app-item'>
                                <img src={app.icon} alt={app.label} />
                                <p>{app.label}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
