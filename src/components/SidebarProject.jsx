const SidebarProject = ({
  index,
  title,
  setSelectedProj,
  setCreateNewOpen,
  selectedProj,
  isActive,
}) => {
  const handleClick = () => {
    setSelectedProj(index);
    setCreateNewOpen(false);
    console.log(`Selected project is: ${index}`);
    console.log(selectedProj);
  };

  return (
    <div onClick={handleClick} className="flex ml-12 mt-4">
      <ul className="flex flex-col w-full">
        <li
          className={
            isActive
              ? "text-gray-100 text-xl w-4/5 p-3 bg-gray-800 rounded-md"
              : "text-gray-100 text-xl w-4/5 p-3  rounded-md"
          }
        >
          {title}
        </li>
      </ul>
    </div>
  );
};
export default SidebarProject;
