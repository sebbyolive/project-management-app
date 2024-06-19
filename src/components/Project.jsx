import ProjectTask from "./ProjectTask";
import { useRef } from "react";

const Project = ({ projectsList, setProjectsList, selectedProj }) => {
  const deleteProject = () => {
    let filteredProjects = { ...projectsList };
    delete filteredProjects[selectedProj];

    const updatedProjectsList = {};
    let newKey = 1;

    for (const key in filteredProjects) {
      updatedProjectsList[newKey] = filteredProjects[key];
      newKey++;
    }

    setProjectsList(updatedProjectsList);
    console.log(updatedProjectsList);
  };

  const taskInput = useRef();

  const setNewTask = () => {
    const newTask = taskInput.current.value;

    newTask &&
      setProjectsList((prevProjectsList) => {
        const updatedProject = {
          ...prevProjectsList[selectedProj],
          tasks: [...prevProjectsList[selectedProj].tasks, newTask],
        };

        return { ...prevProjectsList, [selectedProj]: updatedProject };
      });

    taskInput.current.value = "";
  };

  return (
    <div className="flex flex-col w-3/4 ml-10 mt-36">
      <div className="flex flex-col w-4/5">
        {projectsList[selectedProj] && (
          <>
            <div className="flex flex-row items-center justify-end">
              <button
                onClick={deleteProject}
                className="text-gray-900 bg-slate-300 px-4 py-2 rounded-lg mt-6 hover:text-gray-500"
              >
                Delete
              </button>
            </div>
            <div className="flex flex-col">
              <div>
                <h1 className="text-4xl font-extrabold mb-4">
                  {projectsList[selectedProj].title}
                </h1>
                <h2 className="text-l text-gray-400 mb-4">
                  {projectsList[selectedProj].date}
                </h2>
                <p className="text-xl mb-4">
                  {projectsList[selectedProj].desc}
                </p>
              </div>
              <hr className="h-1 my-6 dark:bg-gray-200"></hr>
              <div className="flex flex-col">
                <h2 className="text-2xl font-bold mb-4">Tasks</h2>
                <div className="flex flex-row items-center mb-10">
                  <input
                    ref={taskInput}
                    className="w-1/4 bg-gray-200"
                    type="text"
                  />
                  <button
                    onClick={setNewTask}
                    className="flex text-gray-900 rounded-lg ml-4 hover:text-gray-500"
                  >
                    Add Task
                  </button>
                </div>
              </div>
              {projectsList[selectedProj].tasks.map((task, index) => (
                <ProjectTask
                  key={index}
                  task={task}
                  index={index}
                  setProjectsList={setProjectsList}
                  projectsList={projectsList}
                  selectedProj={selectedProj}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Project;
