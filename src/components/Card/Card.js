import React, { useState } from 'react';
import { successToast } from '../../utilities/toasts';

const Card = ({ info }) => {
    const { id, img, name, description, bestStartingAge, timeRequired, } = info;
    const [btnTxt, setBtnTxt] = useState('Add to list');
    return (
        <div className="card w-full bg-slate-900 shadow-xl">
            <figure className="px-5 pt-6">
                <img src={img} alt="User" className="rounded-xl" />
            </figure>
            <div className="card-body pt-5">
                <h2 className="card-title">{name}</h2>
                <p className='text-gray-300'>{description}</p>
                <p><span className='font-semibold'>Starting Age :</span> <span className='text-gray-300'>{bestStartingAge}</span></p>
                <p><span className='font-semibold'>Time required :</span> <span className='text-gray-300'>{timeRequired} min</span></p>
                <div className="card-actions">
                    <button id={id} onClick={(e) => { successToast('Added!', 300); setBtnTxt('Added') }} className="mt-5 btn rounded-xl bg-[#00867b] hover:bg-[#016d64] text-white btn-block">{btnTxt}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;