import React from 'react';

const ExerciseDetails = ({ userData }) => {
    const { time, breakTime } = userData;
    return (
        <div>
            <h3 className='my-3 mx-2 text-gray-300 font-medium'>Exercise Details</h3>
            <div className='p-3 bg-base-100 rounded-2xl flex flex-row items-center justify-between'>
                <div className='text-sm text-gray-300 font-medium'>Exercise time</div>
                <div className='min-w-[10px]'></div>
                <div className='text-sm text-gray-400'>{time} minutes</div>
            </div>
            <div className='my-3 p-3 bg-base-100 rounded-2xl flex flex-row items-center justify-between'>
                <div className='text-sm text-gray-300 font-medium'>Break time</div>
                <div className='min-w-[10px]'></div>
                <div className='text-sm text-gray-400'>{breakTime} minutes</div>
            </div>
        </div>
    );
};

export default ExerciseDetails;