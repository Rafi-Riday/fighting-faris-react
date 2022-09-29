import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from 'react-toastify';
import Cards from "./components/Cards/Cards";

function App() {
  // toast theming
  const contextClass = {
    success: "bg-emerald-600",
    info: "bg-blue-500",
  };
  return (
    <div>
      <div className="main-site-drawer drawer drawer-end drawer-mobile">
        <input id="main-page-divider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          {/* <!-- Page content here --> */}
          <Header />
          <br />
          <h2 className="font-medium text-xl m-3">Select your today's fighting style practice</h2>
          <Cards />
        </div>
        <div className="drawer-side">
          <label htmlFor="main-page-divider" className="drawer-overlay"></label>
          <aside className="bg-gray-600">
            {/* <!-- Sidebar content here --> */}
            <SideBar />
          </aside>
        </div>
      </div>
      {/* toast */}
      <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-3"} />
    </div>
  );
}

export default App;