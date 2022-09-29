import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import checkLogo from '../img/circle-check-solid.svg';

const commonThemes = { theme: 'colored', position: "bottom-right", hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, icon: <img src={checkLogo} alt='' />, };

const infoToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.info((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, });
    mainToastFunc();
};

const successToast = (toastText, toastTime) => {
    const mainToastFunc = () => toast.success((toastText || 'Success!'), { ...commonThemes, autoClose: toastTime || 3000, });
    mainToastFunc();
};

export { infoToast, successToast };

/* usage */
// import { infoToast, successToast } from 'utilities/toasts';
// import { ToastContainer } from 'react-toastify';
//
// // toast theming
//   const contextClass = {
//     success: "bg-emerald-600",
//     info: "bg-blue-500",
//   };
//
// infoToast('Done Nicely!', 3000)
//
// {/* toast */}
// <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"} />
//