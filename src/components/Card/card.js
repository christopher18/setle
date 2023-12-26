const Card = ({ number, onClick, isSelected, isSuccessful, isFailed }) => {
    const cardStyle = isSelected ? { boxShadow: '0 0 10px gold' } : {};
    if (isSuccessful) {
        cardStyle.animation = 'flashGreen 1s';
      }
      if (isFailed) {
        cardStyle.animation = 'flashRed 1s';
      }

    return (
        <div className="card" style={cardStyle} onClick={() => onClick(number)}>
        <img src={`/images/${number}.png`} alt={`Card ${number}`} />
        </div>
    );
};

export default Card;
  