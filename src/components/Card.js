import React from "react";
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

const Card = ({ image, name, job, text }) => {
  return (
    <div className='flex flex-col justify-center items-center p-4 gap-2 relative'>
      <div className='bg-indigo-600 w-[150px] h-[150px] rounded-full absolute left-[-50px] top-[-100px]'>
        <img className="w-full h-full rounded-full absolute left-[-10px] top-[10px]" src={image} alt="" />
      </div>
      <div>
        <h1 className='text-3xl' >{name}</h1>
      </div>
      <div>
        <h3 className='text-indigo-600'>{job}</h3>
      </div>
      <div>
        <FaQuoteLeft/>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <FaQuoteRight/>
      </div>

    </div>
  );
};

export default Card;
