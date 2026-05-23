import "./App.css";
import { Outlet } from "react-router-dom";
import Topbar from "./components/TopBar/Topbar";
import Sidebar from "./components/SideBar/Sidebar";

function App() {
  return (
    <div className="min-h-screen bg-blue-50 text-slate-900">
      <Topbar />
      <div className="mx-auto flex max-w-[1600px] flex-col lg:flex-row">
        <Sidebar />
        <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default App;
