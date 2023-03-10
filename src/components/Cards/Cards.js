import React from 'react';
import Card from '../Card/Card';

const Cards = ({ userData, data, interactLocalStorage }) => {

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-5 pt-2'>
            {
                data.map(info => <Card userData={userData} info={info} interactLocalStorage={interactLocalStorage} key={info.id} />)
            }
        </div>
    );
};

export default Cards;