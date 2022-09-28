import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  return (
    <div>
      <div className="text-center text-warning">New Starting Page</div>
      <button className='btn btn-info' onClick={() => toast.info('Wow so easy!', { theme: 'colored', position: "bottom-right", autoClose: 3000, hideProgressBar: false, closeOnClick: true, pauseOnHover: true, draggable: true, progress: undefined, })}><FontAwesomeIcon icon={faCoffee} /></button>
      <ToastContainer />
    </div>
  );
}

export default App;
