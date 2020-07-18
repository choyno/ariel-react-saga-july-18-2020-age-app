import React, { useState, useEffect } from 'react';

import useAge from '../../hooks/useAge';

const AgeDetails = () => {

  const { age:getAge, increaseAge, decreaseAge } = useAge();
  const { age,  year } = getAge;

  const [currentAge, setCurrentAge] = useState(0);
  const [birthYear, setBirthYear] = useState(0);

  useEffect(() =>{
    setCurrentAge(age);
    setBirthYear(year);
  },[ age, year ]);

  const handleIncreaseAge = () => {
    increaseAge({age: currentAge, year: birthYear });
  }

  const handleDecreaseAge = () => {
    decreaseAge({age: currentAge, year: birthYear });
  }

  return (
    <div>
      <div className="Age-label">
          your age: <span> { currentAge }</span>  /
          your year: <span> { birthYear }</span>
        </div>

        <button onClick={ handleIncreaseAge }>Age UP</button>
        <button onClick={ handleDecreaseAge }>Age DOWN</button>
      </div>
  );
}

export default AgeDetails;
