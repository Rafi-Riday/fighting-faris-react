import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import { ToastContainer } from 'react-toastify';
import Cards from "./components/Cards/Cards";
import { useEffect, useState } from "react";
import Answers from "./components/Answers/Answers";
import Footer from "./components/Footer/Footer";

function App() {
  // toast theming
  const contextClass = {
    success: "bg-[#00867b]",
    info: "bg-blue-500",
  };

  const [dataMain, setDataMain] = useState([]);
  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => setDataMain(data))
  }, []);

  const userDataFromLS = localStorage.getItem('userData');
  const [userData, setUserData] = useState({ time: 0, breakTime: 0, added: [], });
  useEffect(() => {
    if (JSON.parse(userDataFromLS)) {
      setUserData(JSON.parse(userDataFromLS));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(userData));
  }, [userData]);

  const setUserDataIdBtn = (command, param) => {

    if (command === 'time') {
      userData.time = userData.time + parseInt(param);
      const newUserData = { ...userData };
      setUserData(newUserData);
    }

    else if (command === 'breakTime') {
      userData.breakTime = parseInt(param);
      const newUserData = { ...userData };
      setUserData(newUserData);
    }

    else if (command === 'added') {
      if (!userData.added.includes(param)) { userData.added.push(param) }
      const newUserData = { ...userData };
      setUserData(newUserData);
    }
  }

  const resetUserData = () => setUserData({ time: 0, breakTime: 0, added: [], });

  return (
    <div>
      <div className="main-site-drawer drawer drawer-end drawer-mobile">
        <input id="main-page-divider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative bg-gray-700">
          {/* <!-- Page content here --> */}
          <Header />
          <br />
          <h2 className="font-medium text-xl m-3">Select today's fighting style practice</h2>
          <Cards userData={userData.added} data={dataMain} interactLocalStorage={setUserDataIdBtn} />
          <Answers />
          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="main-page-divider" className="drawer-overlay"></label>
          <aside className="bg-gray-600">
            {/* <!-- Sidebar content here --> */}
            <SideBar resetUserData={resetUserData} userData={userData} interactLocalStorage={setUserDataIdBtn} />
          </aside>
        </div>
      </div>
      {/* toast */}
      <ToastContainer toastClassName={({ type }) => contextClass[type || "info"] + " relative flex p-1 min-h-10 rounded-xl justify-between overflow-hidden cursor-pointer py-4 px-3 mt-1 sm:mt-2 lg:mt-3"} />
    </div>
  );
}

export default App;