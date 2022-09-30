import React from 'react';

const BreakTimeBtn = ({ userData, breakTime, interactLocalStorage }) => {
    return (
        <>
            {
                parseInt(userData.breakTime) === parseInt(breakTime) ? <button onClick={() => interactLocalStorage('breakTime', breakTime)} className='btn btn-circle btn-sm btn-info text-sm lowercase'>{breakTime}</button> : <button onClick={() => interactLocalStorage('breakTime', breakTime)} className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>{breakTime}</button>
            }
        </>
    );
};

export default BreakTimeBtn;