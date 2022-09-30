import React from 'react';
import BreakTimeBtn from '../BreakTimeBtn/BreakTimeBtn';

const SetBreakTime = ({ userData, interactLocalStorage }) => {
    const breakTimes = [5, 10, 15, 20, 30];
    return (
        <div>
            <h3 className='my-3 mx-2 text-gray-300'><span className='font-medium'>Add A Break</span> (minutes)</h3>
            <div className='p-3 bg-base-100 rounded-2xl flex flex-row items-center justify-between'>
                {
                    breakTimes.map(breakTime => <BreakTimeBtn userData={userData} key={breakTime} interactLocalStorage={interactLocalStorage} breakTime={breakTime} />)
                }
            </div>
        </div>
    );
};

export default SetBreakTime;