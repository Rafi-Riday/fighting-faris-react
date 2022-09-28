import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import checkLogo from '../img/circle-check-solid.svg';

const commonThemes = { theme: 'colored', position: "bottom-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, icon: <img src={checkLogo} alt='' />, };

const infoToast = (toastText) => {
    const mainToastFunc = () => toast.info(toastText, { ...commonThemes, });
    mainToastFunc();
};

const successToast = (toastText) => {
    const mainToastFunc = () => toast.success(toastText, { ...commonThemes, });
    mainToastFunc();
};

export { infoToast, successToast };