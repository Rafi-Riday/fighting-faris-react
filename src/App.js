
function App() {
  return (
    <div>
      <div className="drawer drawer-end drawer-mobile">
        <input id="main-page-divider" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* <!-- Page content here --> */}
          <label htmlFor="main-page-divider" className="btn btn-info btn-sm text-xs lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side">
          <label htmlFor="main-page-divider" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>Sidebar Item 1</li>
            <li>Sidebar Item 2</li>
          </ul>

        </div>
      </div>
    </div>
  );
}

export default App;