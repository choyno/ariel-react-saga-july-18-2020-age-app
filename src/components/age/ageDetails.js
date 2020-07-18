import React, { useState, useEffect } from 'react';

import useAge from '../../hooks/useAge';

const AgeDetails = () => {

  const { age:getAge, increaseAge, decreaseAge } = useAge();
  const { age,  year } = getAge;


  const handleIncreaseAge = () => {
    increaseAge({...getAge});
  }

  const handleDecreaseAge = () => {
    decreaseAge({...getAge});
  }


  return (
    <div>
      <div className="Age-label">
          your age: <span> { age }</span>  /
          your year: <span> { year }</span>
        </div>

        <button onClick={ handleIncreaseAge }>Age UP</button>
        <button onClick={ handleDecreaseAge }>Age DOWN</button>
      </div>
  );
}

export default AgeDetails;
