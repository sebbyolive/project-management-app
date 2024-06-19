import SidebarProject from "./SidebarProject";

const Sidebar = ({
  projectsList,
  setSelectedProj,
  setCreateNewOpen,
  selectedProj,
}) => {
  const handleCreateNewOpenClick = () => {
    setCreateNewOpen(true);
    setSelectedProj(null);
  };

  return (
    <aside className="flex flex-col w-1/4 bg-black mt-20 rounded-tr-3xl">
      <div className="flex flex-col ml-12 mb-12">
        <h1 className="text-3xl text-white mt-20 mb-4">YOUR PROJECTS</h1>
        <button
          onClick={handleCreateNewOpenClick}
          className="bg-gray-700 text-gray-400 w-40 h-16 rounded-lg hover:bg-gray-600"
        >
          + Add Project
        </button>
      </div>
      <div>
        {Object.keys(projectsList).map((key) => (
          <SidebarProject
            key={key}
            setSelectedProj={setSelectedProj}
            selectedProj={selectedProj}
            index={Number(key)} // Ensure index is a number
            isActive={Number(key) === selectedProj} // Ensure comparison is with a number
            title={projectsList[key].title}
            setCreateNewOpen={setCreateNewOpen}
          />
        ))}
      </div>
    </aside>
  );
};
export default Sidebar;
