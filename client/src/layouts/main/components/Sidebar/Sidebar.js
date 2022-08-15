import { NavLink } from "react-router-dom";

import statusIcon from "assets/icons/Nav_status.svg";
import selectedStatusIcon from "assets/icons/Nav_Status_Selected.svg";
import logIcon from "assets/icons/Nav_Log.svg";
import selectedLogIcon from "assets/icons/Nav_Log_Selected.svg";

const Sidebar = () => (
  <aside className="min-w-[100px] h-[100vh] bg-[#332D41] py-5 flex flex-col items-center gap-2">
    <NavLink to="" end>
      {({ isActive }) => (
        <div className="flex flex-col items-center font-medium text-[16pt]">
          <img src={isActive ? selectedStatusIcon : statusIcon} alt="" />
          Status
        </div>
      )}
    </NavLink>

    <NavLink to="/eventlog">
      {({ isActive }) => (
        <div className="flex flex-col items-center font-medium text-[16pt]">
          <img src={isActive ? selectedLogIcon : logIcon} alt="" />
          Log
        </div>
      )}
    </NavLink>
  </aside>
);

export default Sidebar;
