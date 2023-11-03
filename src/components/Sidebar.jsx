import ListMenu from "./ListMenu";

const Sidebar = ({ className }) => {
  return (
    <>
      <div className={className}>
        <ListMenu className={"flex flex-col text-[2rem] gap-[5rem] text-white"}/>
      </div>
    </>
  );
};
export default Sidebar;
