import React from 'react';
import { useNavigate } from 'react-router-dom';

import './home.css';

// async function generateHashFromDate(dateString) {
//     const encoder = new TextEncoder();
//     const data = encoder.encode(dateString);
//     const hashBuffer = await crypto.subtle.digest('SHA-256', data);
//     const hashArray = Array.from(new Uint8Array(hashBuffer)); // convert buffer to byte array
//     const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
//     return hashHex;
// }

function getDailyKey() {
    console.log("getDailyKey");
    const today = new Date().toISOString().slice(0, 10); // Format: YYYY-MM-DD
    console.log("today", today);
    return today;
}

const Home = () => {
    const navigate = useNavigate();

    const navigateTo = (path) => {
        navigate(path);
    };

    // async function handleNavigateDailyGame() {
    //     console.log("handleNavigateDailyGame");
    //     const dailyKey = await getDailyKey(); // Assuming getDailyKey is your async function
    //     navigate("/game/" + dailyKey);
    // }

    return (
        <div className="parent">
            <div className="grid-container-home">
                <div className="card-menu" onClick={() => navigateTo("/puzzle/123")}>
                    <h2>Puzzle</h2>
                    <p className="description">Play a puzzle game</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("/puzzle/" + getDailyKey())}>
                    <h2>Daily Puzzle</h2>
                    <p className="description">Play the daily puzzle</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("/game")}>
                    <h2>Game</h2>
                    <p className="description">Play a game</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("game/" + getDailyKey())}>
                    <h2>Daily Game</h2>
                    <p className="description">Play the daily game</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
