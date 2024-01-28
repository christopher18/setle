import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './setpuzzle.css';

import seedrandom from 'seedrandom';
import Card from '../Card/card';
import { isSet, cardAttributes } from '../../utilities/compute';

const SetPuzzle = () => {
  const { seed } = useParams();
  const [cardNumbers, setCardNumbers] = useState([]);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [successfulSet, setSuccessfulSet] = useState(new Set());
  const [failedSet, setFailedSet] = useState(new Set());
  const [totalNumberSets, setTotalNumberSets] = useState(0);
  const [setsFound, setSetsFound] = useState(new Set());

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
    const generateRandomNumbers = (seed) => {
      const rng = seed ? seedrandom(seed) : Math.random;
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
    setCardNumbers(generateRandomNumbers(seed));
  }, [seed]);

  return (
    <div className="setgame">
      <div className="info"> </div>
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
        <p>Total number of sets found: {setsFound.size}/{totalNumberSets}</p>
      </div>
    </div>
    
  );
};

export default SetPuzzle;