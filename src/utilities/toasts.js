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

/* usage */
// import { infoToast, successToast } from './utilities/toasts';
// import { ToastContainer } from 'react-toastify';
//
// // toast theming
//   const contextClass = {
//     success: "bg-emerald-600",
//     info: "bg-blue-500",
//   };
//
// infoToast('Done Nicely!')
//
// {/* toast */}
// <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"} />
//