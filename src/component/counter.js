import React, { useEffect, useState } from 'react';
export default function Counter(props) {
  const [count, setCount] = useState(0);

  const handlerClick = () => {
    setCount(count + 1);
  }


  useEffect(() => {
    document.title = `you click ${count} times`;

    setTimeout(() => {
      console.log(`you click any times`);
    }, 3000);
    return () => {
      console.log(`you click ${count} times`);
    }
  }, []);

  return (
    <div>
      <p>you click {count} times</p>
      <button onClick={handlerClick}>click me</button>
    </div>
  );
}