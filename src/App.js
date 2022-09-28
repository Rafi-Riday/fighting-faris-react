import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div>
      <div className="text-center text-warning">New Starting Page</div>
      <button className='btn btn-info' onClick={() => toast("Wow so easy!")}>Notify!</button>
      <ToastContainer icon={true} position="bottom-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
    </div>
  );
}

export default App;
