import { useState } from 'react';
import { sculptureList } from './data2.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

	function handlePrevClick() {
		if (index > 0) {
			setIndex(index - 1);
		} else {
			setIndex(sculptureList.length - 1)
		}
  }

  function handleNextClick() {
		if (index < sculptureList.length - 1) {
			setIndex(index + 1);
		} else {
			setIndex(0)
		}
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <>
		  <button onClick={handlePrevClick}>
        Prev
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </>
  );
}
