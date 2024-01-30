import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';

import './setpuzzle.css';

import seedrandom from 'seedrandom';
import Card from '../Card/card';
import { isSet, cardAttributes, generateRandomString } from '../../utilities/compute';

const SetPuzzle = () => {
  const { seed } = useParams();
  const [effectiveSeed, setEffectiveSeed] = useState(seed || generateRandomString(10));
  const [cardNumbers, setCardNumbers] = useState([]);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [successfulSet, setSuccessfulSet] = useState(new Set());
  const [failedSet, setFailedSet] = useState(new Set());
  const [totalNumberSets, setTotalNumberSets] = useState(0);
  const [setsFound, setSetsFound] = useState(new Set());

  // timer related states
  const [timer, setTimer] = useState(0);
  // const [timerInterval, setTimerInterval] = useState(null);
  const timerIntervalRef = useRef();

  const howManySets = (cardNumbers) => {
    let count = 0;
    for (let i = 0; i < cardNumbers.length; i++) {
      for (let j = i + 1; j < cardNumbers.length; j++) {
        for (let k = j + 1; k < cardNumbers.length; k++) {
          const card1 = cardAttributes[cardNumbers[i]];
          const card2 = cardAttributes[cardNumbers[j]];
          const card3 = cardAttributes[cardNumbers[k]];
          if (isSet(card1, card2, card3)) {
            count++;
          }
        }
      }
    }
    return count;
  };


  function addNewSet(foundSet) {
    let setStr = foundSet.sort().join("|");
    setsFound.add(setStr);
    setSetsFound(setsFound);
    if (setsFound.size === totalNumberSets) {
      // Destroy the timer so it doesn't keep running
      clearInterval(timerIntervalRef.current);
    }
  }

  const handleCardClick = (number) => {
    setSelectedCards((prevSelectedCards) => {
      const newSelectedCards = new Set(prevSelectedCards);
      setSuccessfulSet(new Set());
      setFailedSet(new Set());
      if (newSelectedCards.has(number)) {
        newSelectedCards.delete(number);
      } else {
        newSelectedCards.add(number);
      }

      if (newSelectedCards.size === 3) {
        // Evaluate if it's a set
        console.log("Evaluate the set:", Array.from(newSelectedCards));
        let numList = Array.from(newSelectedCards);

        const card1 = cardAttributes[numList[0]];
        const card2 = cardAttributes[numList[1]];
        const card3 = cardAttributes[numList[2]];

        if (isSet(card1, card2, card3)) {
          console.log("It's a set!");
          let numSet = new Set(numList);
          setSuccessfulSet(numSet);
          addNewSet(numList);
          // if set has not already been found, add to sets found

        } else {
          console.log("It's not a set!");
          setFailedSet(new Set(numList));
        }

        // Reset the selected cards after evaluation
        return new Set();
      }

      return newSelectedCards;
    });
  };

  useEffect(() => {
    const generateRandomNumbers = (effectiveSeed) => {
      // if seed is in a future date (not today), then navigate to /game/date-nicetry
      // check if seed is formatted like yyyy-mm-dd
      if (effectiveSeed && effectiveSeed.match(/^\d{4}-\d{2}-\d{2}$/)) {
        const seedDate = new Date(effectiveSeed);
        if (seedDate > new Date()) {
          console.log("seed is in the future");
          window.location.href = "/game/" + effectiveSeed + "-nice-try-🤣";
        }
      }
      const rng = seedrandom(effectiveSeed);
      let numbers = new Set();
      while (numbers.size < 12) {
        const randomNum = Math.floor(rng() * 81) + 1;
        numbers.add(randomNum);
      }
      let cardNums = Array.from(numbers);
      console.log("Number of sets: ", howManySets(cardNums));
      setTotalNumberSets(howManySets(cardNums));
      return cardNums;
    };
    setCardNumbers(generateRandomNumbers(effectiveSeed));
  }, [effectiveSeed]);

  useEffect(() => {
    setTimer(0);
    let startTime = new Date();
    // Define the function that will be called by the interval
    function tick() {
      setTimer(Math.floor((new Date() - startTime) / 1000));
    }

    // Clear any existing interval when setting up a new one
    if (timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
    }

    // Set up the new interval
    timerIntervalRef.current = setInterval(tick, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(timerIntervalRef.current);
    };
  }, []);

  function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;

    let timeString = '';

    if (hours > 0) {
        timeString += `${hours} hours, `;
    }
    if (minutes > 0) {
        timeString += `${minutes} minutes, `;
    }
    timeString += `${remainingSeconds} seconds`;

    return timeString;
  }

  function copyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
  
    try {
      const successful = document.execCommand('copy');
      if (successful) {
        console.log('Text copied to clipboard');
      } else {
        console.error('Failed to copy text');
      }
    } catch (err) {
      console.error('Error in copying text: ', err);
    }
  
    document.body.removeChild(textArea);
  }

  const copyToClipboard = () => {
    let textToCopy = `https://setle.vercel.app/puzzle/${effectiveSeed}\nI just completed a Setle Puzzle!\nCode: ${effectiveSeed},\nCompletion Time: ${formatTime(timer)}\nThink you can beat my time?`;
    if (effectiveSeed.match(/^\d{4}-\d{2}-\d{2}$/)) {
      if (effectiveSeed === new Date().toISOString().slice(0, 10)) {
        textToCopy = `https://setle.vercel.app/puzzle/${effectiveSeed}\nI just completed the Daily Setle Puzzle for ${effectiveSeed}!,\nCompletion Time: ${formatTime(timer)}\nThink you can beat my time?`;
      }
    }
    
    // navigator.clipboard.writeText(textToCopy)
    //     .then(() => {
    //         // Handle successful copy
    //         console.log('Copied to clipboard!');
    //     })
    //     .catch(err => {
    //         // Handle error
    //         console.error('Error copying text: ', err);
    //     });
    copyTextToClipboard(textToCopy);
  };

  return (
    <div className="setgame">
      <div className="info">
        <div>
          <p>Total number of sets found: {setsFound.size}/{totalNumberSets}</p> 
        </div>
        <div className="info-item">
            Time : <span className="timer info-item">{formatTime(timer)}</span>
        </div>
        <div className="info-item">
              {setsFound.size === totalNumberSets && <span className="success_note info-item">You win!! 🎉🎉🎉</span>}
        </div>
        <div className="info-item">
          {setsFound.size === totalNumberSets && <button className="button-snazzy" onClick={copyToClipboard}>Copy to Clipboard!</button>}
        </div>
      </div>
      <div className="game-grid-container">
        <div className="game-grid">
          {cardNumbers.map((number, index) => (
            <Card 
              key={index} 
              number={number} 
              onMouseDown={handleCardClick} 
              isSelected={selectedCards.has(number)}
              isSuccessful={successfulSet.has(number)}
              isFailed={failedSet.has(number)}
            />
          ))}
        </div>
        
      </div>
      <div className="fill-space">
        
      </div>
    </div>
    
  );
};

export default SetPuzzle;