import React from 'react';
import { infoToast } from '../../utilities/toasts';

const ActivityCompletedBtn = () => {

    return (
        <div>
            <button onClick={() => infoToast(`Congratulations! You're done`, 2000)} className='mt-8 btn rounded-xl bg-blue-500 hover:bg-blue-600 text-white border-0 btn-block btn-md text-xs md:btn-md md:text-sm'>Activity Completed</button>
        </div>
    );
};

export default ActivityCompletedBtn;