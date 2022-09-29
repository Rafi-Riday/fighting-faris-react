import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import logo from '../../img/logo.png';

const Header = () => {
    return (
        <header className="p-3 flex flex-row items-center justify-between sticky top-0 bg-gray-700">
            <div className="flex flex-row items-center gap-3">
                <img className="w-9" src={logo} alt="logo" />
                <h1 className="text-3xl"><span className="text-[#ff8870]">Fighting</span> <span className="text-[#b1b1b1]">Faris</span></h1>
            </div>
            <label htmlFor="main-page-divider" className="btn btn-sm p-0 btn-ghost hover:bg-transparent text-info text-3xl lg:hidden"><FontAwesomeIcon icon={faBars} /></label>
        </header>
    );
};

export default Header;