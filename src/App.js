import { infoToast, successToast } from './utilities/Toasts';
import { ToastContainer } from 'react-toastify';

function App() {

  // toast theming
  const contextClass = {
    success: "bg-emerald-600",
    info: "bg-blue-500",
  };

  return (
    <div>
      <div className="text-center text-warning">New Starting Page</div>
      <button className='btn btn-info' onClick={() => infoToast('Done Nicely!')}>asd</button>
      <button className='btn btn-success' onClick={() => successToast('Nicely Done!')}>asd</button>
      {/* toast */}
      <ToastContainer
        toastClassName={({ type }) => contextClass[type || "info"] +
          " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"
        }
      />
    </div>
  );
}

export default App;
