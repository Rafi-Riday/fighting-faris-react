import React from 'react';
import { infoToast } from '../../utilities/toasts';

const ActivityCompletedBtn = () => {

    return (
        <div>
            <button onClick={() => infoToast(`Congratulations! You're done`, 2000)} className='mt-8 btn bg-blue-600 hover:bg-blue-800 btn-block btn-sm text-xs md:btn-md md:text-sm'>Activity Completed</button>
        </div>
    );
};

export default ActivityCompletedBtn;