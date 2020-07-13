import React from 'react';

function Food({ name }) {
  return (
     <h1>I like {name}</h1>
  )
}

const foodILike = [
  {
    name: "kimchi",
    id: 1,
  },
  {
    name: "KIMNAP",
    id: 2,
  },
  {
    name: "GOOKSU",
    id: 3,
  },
  {
    name: "CHICKEN",
    id: 4
  },
  {
    name: "PIZZA",
    id: 5,
  },
  {
    name: "GOGI",
    id: 6,
  }
]

function App() {
  return ( 
    <div>
      {foodILike.map(food => (
        <Food name={food.name }/>
      ))}
    </div>
    // console.log(foodILike)
  );
}

export default App;