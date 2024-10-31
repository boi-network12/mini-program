import React, { useState } from 'react';
import "./CopyWriter.css";

const CopyWriter = () => {
    const [text, setText] = useState(''); // Holds user input
    const [copyText, setCopyText] = useState(''); // Generated copy text

    // Function to generate some placeholder text
    const generateCopyText = () => {
        const generatedText = `Generated copy text based on input: "${text}"`;
        setCopyText(generatedText);
    };

    // Function to copy text to clipboard
    const handleCopy = () => {
        navigator.clipboard.writeText(copyText);
        alert('Copied to clipboard!');
    };

    return (
        <div className="CopyWriterWrapper">
            <h1>CopyWriter</h1>
            <input
                type="text"
                placeholder="Enter text here..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="inputField"
            />
            <button onClick={generateCopyText} className="generateButton">
                Generate Copy
            </button>
            {copyText && (
                <div className="outputArea">
                    <p>{copyText}</p>
                    <button onClick={handleCopy} className="copyButton">
                        Copy to Clipboard
                    </button>
                </div>
            )}
        </div>
    );
};

export default CopyWriter;
