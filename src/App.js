import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from 'react-toastify';
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";

function App() {
  // toast theming
  const contextClass = {
    success: "bg-[#00867b]",
    info: "bg-blue-500",
  };
  // states
  const [dataMain, setDataMain] = useState([]);
  const [userData, setUserData] = useState({});
  // effects
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setDataMain(data))
  }, []);
  // functions
  const setUserDataBtn = (id) => {
    const newUserData = { ...userData };
    if (!userData.added) { userData.added = [] };
    newUserData.added = [...userData.added, id];
    setUserData(newUserData);
  }

  return (
    <div>
      <div className="main-site-drawer drawer drawer-end drawer-mobile">
        <input id="main-page-divider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative bg-gray-700">
          {/* <!-- Page content here --> */}
          <Header />
          <br />
          <h2 className="font-medium text-xl m-3">Select today's fighting style practice</h2>
          <Cards data={dataMain} />
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
      <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-1 sm:mt-2 lg:mt-3"} />
    </div>
  );
}

export default App;