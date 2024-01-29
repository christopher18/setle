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

    // light purple: #4A148CAA
    // light red: #B71C1C
    // light green: #1B5E20
    // light blue: #0D47A1
    return (
        <div className="parent">
            <div className="grid-container-home">
                <div className="card-menu" onClick={() => navigateTo("/puzzle")} style={{backgroundColor: "#4A148CAA"}}>
                    <h2>Puzzle</h2>
                    <p className="description">Play a puzzle game</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("/puzzle/" + getDailyKey())} style={{backgroundColor: "#B71C1CAA"}}>
                    <h2>Daily Puzzle</h2>
                    <p className="description">Play the daily puzzle</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("/game")} style={{backgroundColor: "#1B5E20AA"}}>
                    <h2>Game</h2>
                    <p className="description">Play a game</p>
                </div>
                <div className="card-menu" onClick={() => navigateTo("game/" + getDailyKey())} style={{backgroundColor: "#0D47A1AA"}}>
                    <h2>Daily Game</h2>
                    <p className="description">Play the daily game</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
