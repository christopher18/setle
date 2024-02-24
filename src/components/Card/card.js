import classNames from 'classnames';

import './card.css';

const flipCard = (card) => {
  // add animation
  card.style = { animation: 'flipCard 0.5s' };
  if (card.isUp) {
    return { ...card, isUp: false };
  }
  return { ...card, isUp: true };
};

const Card = ({ number, onMouseDown, isSelected, isSuccessful, isFailed, isUp }) => {
    // const cardStyle = isSelected ? { boxShadow: '0 0 10px gold' } : {};

    const cardClass = classNames({
      'selected-card': isSelected,
      'successful-card': isSuccessful,
      'failed-card': isFailed,
      'card': true,
      'card-animation': true,
      'card-container': true
    });

    // if (isSuccessful) {
    //     cardStyle.animation = 'flashGreen 1s';
    //   }
    //   if (isFailed) {
    //     cardStyle.animation = 'flashRed 1s';
    //   }
    const frontClass = `${isUp ? 'front' : 'nofront'}`;
    const backClass = `${isUp ? 'noback' : 'back'}`;

    const flipClass = `card-inner ${isUp ? '' : 'flipped'}`;

    return (
      <div onMouseDown={() => onMouseDown(number)} className={flipClass}>

          <div className={frontClass}>
              {/* Front of the card */}
              <img src={`/images/${number}.png`} alt={`Card ${number}`} className={cardClass}/>
          </div>
          <div className={backClass}>
            <div className="svg-container">
              <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
                <rect width="300" height="200" fill="#022588" rx="10" ry="10"/>
                <polygon points="50,100 150,150 250,100 150,50" fill="purple"/>
                <circle cx="150" cy="100" r="40" fill="green"/>
              </svg>
            </div>
          </div>
          
          

      </div>
    );
};

// {isUp ? <div className="front">
//             {/* Front of the card */}
//             <img src={`/images/${number}.png`} alt={`Card ${number}`} />
//           </div> : null}
//           {!isUp ? <div className="back">
//             <div className="svg-container">
//               <svg viewBox="0 0 300 200" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
//                 <rect width="300" height="200" fill="#022588" rx="10" ry="10"/>
//                 <polygon points="50,100 150,150 250,100 150,50" fill="purple"/>
//                 <circle cx="150" cy="100" r="40" fill="green"/>
//               </svg>
//             </div>
//           </div> : null}

export { Card, flipCard };
  