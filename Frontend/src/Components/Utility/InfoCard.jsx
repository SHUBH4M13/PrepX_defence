import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function InfoCard(props) {
  return (
      <div className='h-fit w-fit bg-darkgreen flex justify-center items-center gap-2 px-3 rounded-full'>
        <FontAwesomeIcon icon={faCheck} className="text-PrimaryGold" />
        <p className='text-white/90 text-md font-Helvetica'>{props.text}</p>
      </div>
  );
}
