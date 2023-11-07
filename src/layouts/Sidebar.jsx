import ListMenu from "../components/ListMenu";

const Sidebar = ({ className }) => {
  const listMenuClass = [
    "flex",
    "flex-col",
    "text-[2rem]",
    "gap-[5rem]",
    "text-white",
  ];
  return (
    <>
      <div className={className}>
        <ListMenu className={listMenuClass.join(" ")} />
      </div>
    </>
  );
};
export default Sidebar;
