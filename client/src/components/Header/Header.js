import { useLocation } from "react-router-dom";

const titleMap = [
  { path: "/", title: "Vehicle Status" },
  { path: "/vehicle", title: "Vehicle Status" },
  { path: "/eventlog", title: "Event Log" },
];

const Header = () => {
  const currLocation = useLocation();

  const getTitle = () => {
    const { title } = titleMap.find(
      (item) => item.path === currLocation.pathname
    );

    return title;
  };

  return (
    <header className="w-full bg-[#332D41] border border-[#131116] p-5">
      <p className="font-medium text-[22pt] px-[100px]">{getTitle()}</p>
    </header>
  );
};

export default Header;
