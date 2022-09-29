import React from 'react';
import UserStat from '../UserStat/UserStat';
import UserData from '../UserData/UserData';
import SetBreakTime from '../SetBreakTime/SetBreakTime';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import ActivityCompletedBtn from '../ActivityCompletedBtn/ActivityCompletedBtn';

const SideBar = () => {
    return (
        <div className='p-3'>
            <UserData />
            <UserStat />
            <SetBreakTime />
            <ExerciseDetails />
            <ActivityCompletedBtn />
        </div>
    );
};

export default SideBar;