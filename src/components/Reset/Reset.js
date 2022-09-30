import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRetweet } from '@fortawesome/free-solid-svg-icons';

const Reset = ({ resetUserData }) => {
    return (
        <div className='w-full mt-5 flex items-center justify-center'>
            <button onClick={resetUserData} className='btn btn-error'>Reset&nbsp;&nbsp;<big><FontAwesomeIcon icon={faRetweet} /></big></button>
        </div>
    );
};

export default Reset;