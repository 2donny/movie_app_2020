import React from 'react';
import PropTypes from "prop-types";

function Food({ name, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
    </div>
  )
}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food 
        key={dish.id} 
        name={dish.name}
        rating={dish.rating}
        />
      ))}
    </div>
  )
}

// Food 컴포넌트의 PropType을 검사
Food.propTypes = {
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
};


const foodILike = [
  {
    id: 1,
    name: "kimchi",
    // rating: 5,
  },
  {
    id: 2,
    name: "KIMNAP",
    rating: 4.6,
  },
  {
    id: 3,
    name: "GOOKSU",
    rating: 4,
  },
  {
    id: 4,
    name: "CHICKEN",
    rating: 3,
  },
  {
    id: 5,
    name: "PIZZA",
    rating: 2,
  },
  {
    id: 6,
    name: "GOGI",
    rating: 5,
  }
]

// function renderFood(food) {
//   return <Food name={food.name} />
// }


// function App() { //v3
//   return <div> {console.log(foodILike.map(renderFood))} </div>
// }

// function App() { //v2
//   return (
//     <div> 
//       {foodILike.map(dish => (
//       <Food key={dish.id} name={dish.name} />
//       ))}
//     </div>
//   )
// }

// function App1() { //v1
//   return (
//     <div>
//       <Food name="kimchi"/>
//       <Food name="kimchi"/>
//       <Food name="kimchi"/>
//       <Food name="kimchi"/>
//     </div>
//   )
// }


export default App;

