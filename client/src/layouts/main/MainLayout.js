import { Outlet } from "react-router-dom";

import Sidebar from "layouts/main/components/Sidebar/Sidebar";
import Header from "layouts/main/components/Header/Header";

const MainLayout = () => (
  <div className="h-[100vh] bg-[#131116] text-white">
    <Header />
    <main className="flex">
      <Sidebar />
      <section className="px-5 pt-5 w-full bg-[#131116]">
        <Outlet />
      </section>
    </main>
  </div>
);

export default MainLayout;
