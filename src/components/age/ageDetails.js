import React, { useState, useEffect } from 'react';

import useAge from '../../hooks/useAge';
const AgeDetails = () => {

  const { age:getAge, increaseAge } = useAge();
  const { age,  year } = getAge;

  const [currentAge, setCurrentAge] = useState(0);
  const [birthYear, setBirthYear] = useState(0);

  useEffect(() =>{
    setCurrentAge(age);
    setBirthYear(year);

    console.log(getAge)
  },[ age, year ]);

  const handleIncreaseAge = () => {
    increaseAge({age: currentAge, year: birthYear });
  }

  return (
    <div>
      <div className="Age-label">
          your age: <span> { currentAge }</span>  /

          your year: <span> { birthYear }</span>
        </div>

        <button onClick={ handleIncreaseAge }>Age UP</button>
        <button >Age Down</button>
      </div>
  );
}

export default AgeDetails;
