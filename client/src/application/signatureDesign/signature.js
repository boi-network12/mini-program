import React, { useState } from 'react';
import "./SignatureDesign.css";

const SignatureDesign = () => {
    const [name, setName] = useState('');
    const [font, setFont] = useState('Arial');
    const [color, setColor] = useState('#000');
    const [fontSize, setFontSize] = useState(24);

    return (
        <div className='SignatureDesignWrapper'>
            <h2>Signature Design Generator</h2>

            <div className='controls'>
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your name'
                    />
                </label>

                <label>
                    Font:
                    <select value={font} onChange={(e) => setFont(e.target.value)}>
                        <option value="Arial">Arial</option>
                        <option value="Courier New">Courier New</option>
                        <option value="Cursive">Cursive</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Brush Script MT">Brush Script</option>
                        <option value="Pacifico, cursive">Pacifico</option>
                        <option value="Great Vibes, cursive">Great Vibes</option>
                    </select>
                </label>

                <label>
                    Font size:
                    <input
                        type="number"
                        min="10"
                        max="72"
                        value={fontSize}
                        onChange={(e) => setFontSize(Number(e.target.value))}
                    />
                </label>

                <label>
                    Color:
                    <input
                        type="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                    />
                </label>
            </div>

            <div
                className="signature-preview"
                style={{
                    fontFamily: font,
                    color,
                    fontSize: `${fontSize}px`,
                }}
            >
                {name || "Your Signature"}
            </div>
        </div>
    );
};

export default SignatureDesign;
