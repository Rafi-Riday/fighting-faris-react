import React from 'react';

const UserStat = () => {
    return (
        <div className="stats bg-base-100 shadow">
            <div className="stat px-3 py-2 pr-2">
                <div className="stat-title">Weight</div>
                <div className="stat-value text-2xl">
                    80
                    <sub className="stat-desc"> kg</sub>
                </div>
            </div>
            <div className="stat px-3 py-2">
                <div className="stat-title">Height</div>
                <div className="stat-value text-2xl">
                    5.10
                    <sub className="stat-desc"> ft</sub>
                </div>
            </div>
            <div className="stat px-3 py-2 pl-2">
                <div className="stat-title">Age</div>
                <div className="stat-value text-2xl">
                    20
                    <sub className="stat-desc"> yrs</sub>
                </div>
            </div>
        </div>
    );
};

export default UserStat;