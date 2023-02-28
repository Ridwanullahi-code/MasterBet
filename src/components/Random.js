import React, { useState } from 'react'
import PropTypes from 'prop-types';

const Random = ({array}) => {
    // const list = [[8, 2, 4, 4, 3], [6, 7, 4, 8, 9]]
    const [randOne, setRandOne] = useState([]);
    const colors = ['Blue', "yellow", "green", "deepRed"]
    
    function getMultipleRandom(arr, num, state) {
    const shuffled = [...arr].sort(() => 0.5 - Math.random());
    state([...shuffled.slice(0, num)]);
  }
  return (
    <div className="mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 mx-5 md:mx-10 md:space-x-20">
        <div className="flex-col flex space-y-5  bg-white shadow w-full p-5 rounded-md px-5 md:px-20">
          <div className="flex space-x-4 mx-auto">
          {randOne && randOne.map((ar ,index) => (
          <span className={`draw circle ${colors[index]}`} key={index}>{ ar}</span>
        ))}
        </div>
        <button type="button" className="rounded-md p-2 bg-green-500 text-white"
          onClick={ () => getMultipleRandom(array, 2, setRandOne) }>
          Get two pairs bet
        </button>
        </div>
      </div>
  )
}
// props validation should be propTypes
Random.propTypes = {
    array: PropTypes.array.isRequired,
};
export default Random
