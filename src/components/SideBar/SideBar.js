import React from 'react';
import UserStat from '../UserStat/UserStat';
import UserData from '../UserData/UserData';
import SetBreakTime from '../SetBreakTime/SetBreakTime';
import ExerciseDetails from '../ExerciseDetails/ExerciseDetails';
import ActivityCompletedBtn from '../ActivityCompletedBtn/ActivityCompletedBtn';
import Reset from '../Reset/Reset';

const SideBar = ({ resetUserData, interactLocalStorage, userData }) => {
    return (
        <div className='p-3'>
            <UserData />
            <UserStat />
            <SetBreakTime userData={userData} interactLocalStorage={interactLocalStorage} />
            <ExerciseDetails userData={userData} />
            <ActivityCompletedBtn />
            <Reset resetUserData={resetUserData} />
        </div>
    );
};

export default SideBar;