import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './setgame.css';

import Card from '../Card/card';
import { isSet, getRandomDeck, cardAttributes } from '../../utilities/compute';

const SetGame = () => {
  const { seed } = useParams();
  const [cardNumbers, setCardNumbers] = useState([]);
  const [selectedCards, setSelectedCards] = useState(new Set());
  const [successfulSet, setSuccessfulSet] = useState(new Set());
  const [failedSet, setFailedSet] = useState(new Set());
  const [totalNumberSets, setTotalNumberSets] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  
  const [deckCardNums, setDeckCardNums] = useState(new Array());

  const howManySets = (cardNumbs) => {
    let count = 0;
    for (let i = 0; i < cardNumbs.length; i++) {
      for (let j = i + 1; j < cardNumbs.length; j++) {
        for (let k = j + 1; k < cardNumbs.length; k++) {
          const card1 = cardAttributes[cardNumbs[i]];
          const card2 = cardAttributes[cardNumbs[j]];
          const card3 = cardAttributes[cardNumbs[k]];
          if (isSet(card1, card2, card3)) {
            console.log(card1, card2, card3)
            count++;
          }
        }
      }
    }
    return count;
  };

  const handleCardSelection = (number) => {
    setSelectedCards((prevSelectedCards) => {
        console.log("deck size at start", deckCardNums.length)
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
            // Remove the cards from cardNumbers and pull three new cards from remainingCards
            // Replace the cards in cardNumbers with the new cards in the same order
            let newCardNumbers = cardNumbers;
            let newDeckCardNums = [...deckCardNums];
            for (let i = 0; i < numList.length; i++) {
                if (newDeckCardNums.length === 0 || cardNumbers.length > 12) {
                    // remove the cards from cardNumbers without replacing if there are no more cards in the deck, or if there are more than 12 cards on the board
                    newCardNumbers = newCardNumbers.filter((value) => !numList.includes(value));
                } else {
                    // replace the cards in cardNumbers with the new cards in the same order
                    newCardNumbers[newCardNumbers.indexOf(numList[i])] = newDeckCardNums.pop();
                }
            }

            // Check if there are any sets left
            let howManySetsLeft = howManySets(newCardNumbers);
            console.log("Number of sets: ", howManySetsLeft);

            // Check game over condition
            if (howManySetsLeft === 0 && newDeckCardNums.length === 0) {
                console.log("No sets left and no cards left in deck. Game over!");
                setGameWon(true);
            }

            while (howManySetsLeft === 0 && newDeckCardNums.length > 0) {
                console.log("No sets found. Adding 3 cards to deck.");
                for (let i = 0; i < 3; i++) {
                    if (newDeckCardNums.length < 1) {
                        setGameWon(true);
                        return new Set();
                    }
                    let nextDeckNum = newDeckCardNums.pop();
                    newCardNumbers.push(nextDeckNum);
                }
                howManySetsLeft = howManySets(newCardNumbers);
                console.log("Number of sets: ", howManySetsLeft);
            }

            setDeckCardNums(newDeckCardNums);
            // Update UI with new card numbers
            setCardNumbers(newCardNumbers);
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
        let deckNums = getRandomDeck(81, seed);
        console.log(deckNums)
        
        let cardNums = new Array();
        for (let i = 0; i < 12; i++) {
            let nextDeckNum = deckNums.pop();
            console.log("popping 0")
            cardNums.push(nextDeckNum);
        }

        console.log(cardNums)
        console.log(deckNums)

        let numberOfSets = howManySets(cardNums)
        console.log("Number of sets: ", numberOfSets);
        
        while (numberOfSets === 0) {
            console.log("No sets found. Adding 3 cards to deck.");
            for (let i = 0; i < 3; i++) {
                let nextDeckNum = deckNums.pop();
                console.log("popping 01")
                cardNums.push(nextDeckNum);
            }
            numberOfSets = howManySets(cardNums);
            console.log("Number of sets: ", numberOfSets);
        }

        setTotalNumberSets(numberOfSets);
        setDeckCardNums(deckNums);
        console.log("deck size at end of first", deckNums.length)
        return cardNums;
    };
    setCardNumbers(generateRandomNumbers(seed));
  }, [seed]);

  return (
    <div className="setgame">
        <div className="info"> Deck : <span className="deck">{deckCardNums.length}</span> 
        {gameWon && <span className="success_note">You win!! 🎉🎉🎉</span>}</div>
        <div className="grid">
        {cardNumbers.map((number, index) => (
            <Card 
            key={index} 
            number={number} 
            onClick={handleCardSelection} 
            isSelected={selectedCards.has(number)}
            isSuccessful={successfulSet.has(number)}
            isFailed={failedSet.has(number)}
            />
        ))}
        </div>
    </div>
    
  );
};

export default SetGame;