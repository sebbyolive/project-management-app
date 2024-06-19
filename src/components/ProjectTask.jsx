import { useRef } from "react";
const ProjectTask = ({
  index,
  task,
  setProjectsList,
  projectsList,
  selectedProj,
}) => {
  const taskRef = useRef();

  const deleteTask = () => {
    const curTaskIndex = index; // Index of the task to delete
    const selectedProject = projectsList[selectedProj]; // The currently selected project

    // Filter out the task to be deleted
    const updatedTasksProj = selectedProject.tasks.filter(
      (task, idx) => idx !== curTaskIndex
    );

    // Update the projectsList with the updated tasks array
    const updatedProjectsList = {
      ...projectsList,
      [selectedProj]: {
        ...projectsList[selectedProj],
        tasks: updatedTasksProj,
      },
    };

    // Update the state with the new projects list
    setProjectsList(updatedProjectsList);
  };

  return (
    <div
      ref={taskRef}
      className="flex flex-row bg-slate-100 mt-4 justify-between p-4 pr-10 w-3/4"
    >
      <h4 ref={taskRef} className="">
        {task}
      </h4>
      <button onClick={deleteTask} className="hover:text-slate-500">
        Clear
      </button>
    </div>
  );
};
export default ProjectTask;
