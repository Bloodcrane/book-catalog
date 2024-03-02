import React from 'react';
import BookComponent from './Book';

function App() {
  const handlePrintInfo = (title, characters) => {
    console.log(`Book Title: ${title}`);
    console.log(`Characters: ${characters.join(', ')}`);
  };

  return (
    <div className="App">
      <BookComponent
        imageUrl="https://github.com/Bloodcrane/Book-pictures/blob/main/whitenights.jpg?raw=true"
        title="White Nights"
        description='"White Nights" is a poignant novella by Fyodor Dostoevsky, exploring themes of loneliness and human connection through the encounters of a solitary dreamer and a young woman in St. Petersburg.'
        characters={['Nastenka', 'The Dreamer', 'The Narrator']}
        onClick={handlePrintInfo}
      />
      <BookComponent
        imageUrl="https://github.com/Bloodcrane/Book-pictures/blob/main/warandpeace.jpg?raw=true"
        title="War and Peace"
        description='"War and Peace" is a novel by Leo Tolstoy, considered one of the greatest literary works ever written. Set during the Napoleonic Wars, it follows the lives of several aristocratic families as they navigate love, war, and societal upheaval.'
        characters={['Pierre Bezukhov', 'Natasha Rostova', 'Prince Andrei Bolkonsky', 'Countess Anna Pavlovna Scherer']}
        onClick={handlePrintInfo}
      />
      <BookComponent
        imageUrl="https://github.com/Bloodcrane/Book-pictures/blob/main/themetamorphosis.jpg?raw=true"
        title="Metamorphosis"
        description='"Metamorphosis" is a novella by Franz Kafka, depicting the bizarre and surreal story of Gregor Samsa, who wakes up one morning to find himself transformed into a giant insect.'
        characters={['Gregor Samsa', 'Grete Samsa', 'Mr. Samsa', 'Mrs. Samsa']}
        onClick={handlePrintInfo}
      />
    </div>
  );
}

export default App;
