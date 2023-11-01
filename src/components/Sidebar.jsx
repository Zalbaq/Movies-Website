import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import ListMenu from "./ListMenu";

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <div className="absolute h-[100vh] w-[25rem] top-0 left-0 flex flex-col bg-red-400">
        <Hamburger />
        <ListMenu />
      </div>
    </>
  );
};
export default Sidebar;
