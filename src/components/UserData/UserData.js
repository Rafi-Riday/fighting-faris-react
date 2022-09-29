import React from 'react';
import userImg from '../../img/user-img.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

const UserData = () => {
    return (
        <div className="stat flex gap-2 items-center py-2 px-1">
            <div className="text-secondary">
                <div className="avatar mt-2">
                    <div className="w-14 rounded-full ring ring-[#c994d44b] ring-offset-[#917bbd] ring-offset-2">
                        <img src={userImg} alt='' />
                    </div>
                </div>
            </div>
            <div>
                <div className="stat-title">Rafiul Hossain Riday</div>
                <div className="text-xs text-secondary"><FontAwesomeIcon icon={faLocationDot} /> Chattogram, Bangladesh</div>
            </div>
        </div>
    );
};

export default UserData;