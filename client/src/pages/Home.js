import React from 'react';
import './Home.css';
import Signture_design_img from '../assets/signature-app.png';
import world_clock from '../assets/world-clock.jfif';
import wifi_speed from '../assets/wifi-speed.jfif';
import translate_image from '../assets/translate-image.png';
import medal_table from '../assets/medal-table.jfif';
import copy_writter from '../assets/copy-writter.webp';
import fire_work from '../assets/firework-simulator.jfif';
import pomodoro from '../assets/pomodoro-image.jfif';
import postal_codes from '../assets/postal-code.jfif';
import online_drawing from '../assets/online-drawing.jfif';
import { Link } from 'react-router-dom';

const boxesData = [
    {
        id: 1,
        title: "Popular",
        apps: [
            {
                id: 1,
                label: "Signature",
                link: "/signature-design",
                icon: Signture_design_img,
            },
            {
                id: 2,
                label: "World Clock",
                link: "/world-clock",
                icon: world_clock,
            },
            {
                id: 3,
                label: "medal table",
                link: "/medal-table",
                icon: medal_table,
            },
            {
                id: 4,
                label: "fire simulator",
                link: "/world-clock",
                icon: fire_work,
            },
            {
                id: 5,
                label: "copy writter",
                link: "/world-clock",
                icon: copy_writter,
            },
            {
                id: 6,
                label: " pomodoro",
                link: "/world-clock",
                icon: pomodoro,
            },
            {
                id: 7,
                label: " postal codes",
                link: "/world-clock",
                icon: postal_codes,
            },
            {
                id: 8,
                label: " online drawing",
                link: "/world-clock",
                icon: online_drawing,
            },
        ],
        hasButtons: true,
    },
    {
        id: 2,
        title: "Basic tools",
        apps: [
            // appp icon
        ],
        hasButtons: false,
    },
    {
        id: 3,
        title: "More tools",
        apps: [
            // app icons
        ],
        hasButtons: false,
    },
    {
        id: 4,
        title: "Dsicover",
        apps: [
            // app icons
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
                            <Link to="/wifi-speed">
                                <img src={wifi_speed} alt="" />
                            </Link>
                            <Link to="/translator">
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
