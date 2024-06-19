const NoProjects = ({ setCreateNewOpen }) => {
  return (
    <div className="flex flex-col w-3/4 items-center text-center">
      <div className="flex flex-col mt-60 items-center">
        <img className="h-32 mb-6" src="notepad.webp" alt="" />
        <h1 className="text-2xl">No Project Selected</h1>
        <h2 className="text-lg">
          Select a project or get started on a new one
        </h2>
        <button
          onClick={() => setCreateNewOpen(true)}
          className="bg-gray-700 text-gray-400 w-40 h-16 rounded-lg mt-6"
        >
          Create New Project
        </button>
      </div>
    </div>
  );
};
export default NoProjects;
