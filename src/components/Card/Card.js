import React from 'react';
// import userImg from '../../img/user-img.jpeg';

const Card = () => {
    return (
        <div className="card w-full bg-slate-900 shadow-xl">
            <figure className="px-5 pt-6">
                <img src="https://placeimg.com/400/225/arch" alt="User" className="rounded-xl" />
            </figure>
            <div className="card-body pt-5">
                <h2 className="card-title">Shoes</h2>
                <p className='text-gray-300'>
                    If a dog chews shoes whose shoes does he choose?
                    If a dog chews shoes whose shoes does he choose?
                    If a dog chews shoes whose shoes does he choose?
                </p>
                <p><span className='font-semibold'>For Age :</span> <span className='text-gray-300'>20-25</span></p>
                <p><span className='font-semibold'>Time required :</span> <span className='text-gray-300'>30 min</span></p>
                <div className="card-actions">
                    <button className="mt-5 btn btn-primary btn-block">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;