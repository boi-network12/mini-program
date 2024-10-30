import React, { useEffect, useState } from 'react';
import "./translator.css";

const Translator = () => {
    const [languages, setLanguages] = useState([]);
    const [inputText, setInputText] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [sourceLang, setSourceLang] = useState('igbo');
    const [targetLang, setTargetLang] = useState('english');

    useEffect(() => {
        // Fetch supported languages
        fetch('https://api.example.com/languages')  // Replace with actual API endpoint
            .then(response => response.json())
            .then(data => setLanguages(data.languages))
            .catch(error => console.error("Error fetching languages:", error));
    }, []);

    const handleTranslate = () => {
        // Fetch translation
        fetch('https://api.example.com/translate', {  // Replace with actual API endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                text: inputText,
                source: sourceLang,
                target: targetLang
            })
        })
            .then(response => response.json())
            .then(data => setTranslatedText(data.translatedText))
            .catch(error => console.error("Error translating text:", error));
    };

    return (
        <div className='translator-wrapper'>
            <form onSubmit={(e) => e.preventDefault()}>
                <select value={sourceLang} onChange={(e) => setSourceLang(e.target.value)}>
                    {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
                <textarea
                    cols="30"
                    rows="10"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder='Translate your text'
                ></textarea>
                <button onClick={handleTranslate}>Translate</button>
            </form>

            <form>
                <select value={targetLang} onChange={(e) => setTargetLang(e.target.value)}>
                    {languages.map(lang => (
                        <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                </select>
                <textarea
                    cols="30"
                    rows="10"
                    value={translatedText}
                    disabled
                    placeholder='wait for your output'
                ></textarea>
            </form>
        </div>
    );
}

export default Translator;
