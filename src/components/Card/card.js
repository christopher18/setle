import classNames from 'classnames';

import './card.css';

const Card = ({ number, onMouseDown, isSelected, isSuccessful, isFailed }) => {
    // const cardStyle = isSelected ? { boxShadow: '0 0 10px gold' } : {};

    const cardClass = classNames({
      'selected-card': isSelected,
      'successful-card': isSuccessful,
      'failed-card': isFailed,
      'card': true,
      'card-animation': true,
    });

    // if (isSuccessful) {
    //     cardStyle.animation = 'flashGreen 1s';
    //   }
    //   if (isFailed) {
    //     cardStyle.animation = 'flashRed 1s';
    //   }

    return (
        <div className={cardClass} onMouseDown={() => onMouseDown(number)}>
        <img src={`/images/${number}.png`} alt={`Card ${number}`} />
        </div>
    );
};

export default Card;
  