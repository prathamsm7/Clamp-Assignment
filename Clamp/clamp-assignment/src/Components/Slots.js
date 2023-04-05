import React from 'react';

const Slots = ({ date, month, bg }) => {
  return (
    <div
      className='w-25 p-3 my-1 mx-2 rounded-4 text-center'
      style={{ backgroundColor: `${bg}` }}
    >
      <h4 className='fw-bold'>{date}</h4>
      <p>{month}</p>
    </div>
  );
};

export default Slots;
