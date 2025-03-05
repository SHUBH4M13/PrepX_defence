import React from 'react';


export default function InfoCard(props) {
  return (
      <div className='h-fit w-fit bg-darkgreen flex justify-center items-center gap-2 px-3 rounded-full'>
        <p className='text-white/90 text-md font-Helvetica'>{props.text}</p>
      </div>
  );
}
