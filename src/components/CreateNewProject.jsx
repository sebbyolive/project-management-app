import { useRef } from "react";

const CreateNewProject = ({
  setCreateNewOpen,
  setSelectedProj,
  setProjectsList,
  projectsList,
}) => {
  const handleCreateNewOpenClick = () => {
    setCreateNewOpen(false);
  };

  const nextProjIndex = useRef(Object.keys(projectsList).length);
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();
  const activeInputClass = "bg-gray-300 rounded-sm p-2 w-full mb-4";
  const errorInputClass = "bg-red-300 rounded-sm p-2 w-full mb-4";

  const errorTimeout = (whichRef) => {
    setTimeout(() => {
      whichRef.current.className = activeInputClass;
    }, 2500);

    whichRef.current.className = errorInputClass;
  };

  const handleSaveClick = () => {
    const newProject = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      date: dateRef.current.value,
      tasks: [],
    };

    !newProject.title && errorTimeout(titleRef);
    !newProject.desc && errorTimeout(descRef);
    !newProject.date && errorTimeout(dateRef);

    if (newProject.title && newProject.desc && newProject.date) {
      setProjectsList((prevProjectsList) => {
        const nextIndex = nextProjIndex.current;
        nextProjIndex.current += 1;

        const updatedProjectsList = {
          ...prevProjectsList,
          [nextIndex]: newProject,
        };

        setSelectedProj(nextIndex);
        return updatedProjectsList;
      });

      setCreateNewOpen(false);
    }
  };

  return (
    <div className="flex flex-col w-3/4 ml-10 mt-36">
      <container className="flex flex-col w-4/5">
        <div className="flex flex-row items-center justify-end mb-4">
          <button
            onClick={handleCreateNewOpenClick}
            className="text-gray-900 w-32 h-16 rounded-lg mt-6 hover:text-gray-500"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveClick}
            className="bg-gray-900 text-gray-400 w-32 h-12 rounded-lg mt-6 hover:bg-gray-600"
          >
            Save
          </button>
        </div>
        <div className="flex flex-col">
          <div>
            <h1 className="text-sm font-extrabold">TITLE</h1>
            <input className={activeInputClass} type="text" ref={titleRef} />
          </div>
          <div>
            <h1 className="text-sm font-extrabold">DESCRIPTION</h1>
            <textarea
              className="bg-gray-300 rounded-sm p-2 w-full mb-4"
              type="text"
              ref={descRef}
            />
          </div>
          <div>
            <h1 className="text-sm font-extrabold">DUE DATE</h1>
            <input
              ref={dateRef}
              className="bg-gray-300 rounded-sm p-2 w-full"
              type="date"
            />
          </div>
        </div>
      </container>
    </div>
  );
};
export default CreateNewProject;
