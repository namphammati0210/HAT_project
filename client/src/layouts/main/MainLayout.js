import { Outlet } from "react-router-dom";

const MainLayout = () => (
  <div className="h-[100vh] bg-[#131116] text-white">
    <header className="w-full bg-[#332D41] border border-[#131116] p-5">
      Header
    </header>
    <main className="flex">
      <aside className="w-[100px] h-[100vh] bg-[#332D41] py-5">sidebar</aside>
      <section className="px-5 pt-5 w-full bg-[#131116]">
        <Outlet />
      </section>
    </main>
  </div>
);

export default MainLayout;
