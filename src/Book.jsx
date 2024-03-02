import React from 'react';
import './App.css';

const colors = ['#CA3C25', '#E6AA68', '#49306B', '#FFFBBD', '#7FB069', '#AAA1C8'];

const BookComponent = ({ imageUrl, title, description, characters, onClick }) => {
  const handleClick = () => {
    onClick(title, characters);
  };

  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const bookStyle = {
    backgroundColor: randomColor,
  };

  return (
    <div className="book-container" style={bookStyle}>
      <div className='book-inside-container'>
        <img src={imageUrl} alt={title} className="book-image" />
        <h2 className="book-title">{title}</h2>
        <p className="book-description">{description}</p>
        <p className="book-characters">Characters: {characters.join(', ')}</p>
        <button className="book-button" onClick={handleClick}>Print Info</button>
      </div>
    </div>
  );
};

export default BookComponent;
