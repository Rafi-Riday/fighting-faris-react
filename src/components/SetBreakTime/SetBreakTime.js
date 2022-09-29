import React from 'react';

const SetBreakTime = () => {
    return (
        <div>
            <h3 className='my-3 mx-2 text-gray-300'><span className='font-medium'>Add A Break</span> (minutes)</h3>
            <div className='p-3 bg-base-100 rounded-2xl flex flex-row items-center justify-between'>
                <button className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>5</button>
                <button className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>10</button>
                <button className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>15</button>
                <button className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>20</button>
                <button className='btn btn-circle btn-sm btn-info btn-outline text-sm lowercase'>30</button>
            </div>
        </div>
    );
};

export default SetBreakTime;