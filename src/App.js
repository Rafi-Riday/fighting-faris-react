import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

function App() {

  return (
    <div>
      <div className="main-site-drawer drawer drawer-end drawer-mobile">
        <input id="main-page-divider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          {/* <!-- Page content here --> */}
          <Header />
          <h2>Select your today's fighting style practice</h2>

        </div>
        <div className="drawer-side">
          <label htmlFor="main-page-divider" className="drawer-overlay"></label>
          <aside className="bg-gray-600">
            {/* <!-- Sidebar content here --> */}
            <SideBar />
          </aside>

        </div>
      </div>
    </div>
  );
}

export default App;