import Sidebar from "./components/Sidebar";
import NoProjects from "./components/NoProjects";
import Project from "./components/Project";
import { useState } from "react";
import CreateNewProject from "./components/CreateNewProject";

const App = () => {
  const [projectsList, setProjectsList] = useState({}); // Check if any projects exist yet

  const [selectedProj, setSelectedProj] = useState(1);

  const [createNewOpen, setCreateNewOpen] = useState(false); // Check if creating a new project

  const hasProjects = Object.keys(projectsList).length > 0;

  return (
    <>
      <div className="flex h-screen">
        <Sidebar
          projectsList={projectsList}
          setProjectsList={setProjectsList}
          setSelectedProj={setSelectedProj}
          selectedProj={selectedProj}
          setCreateNewOpen={setCreateNewOpen}
        />
        {createNewOpen && (
          <CreateNewProject
            setProjectsList={setProjectsList}
            setCreateNewOpen={setCreateNewOpen}
            projectsList={projectsList}
            setSelectedProj={setSelectedProj}
          />
        )}
        {!hasProjects && !createNewOpen && (
          <NoProjects setCreateNewOpen={setCreateNewOpen} />
        )}
        {hasProjects && selectedProj !== null && !createNewOpen && (
          <Project
            projectsList={projectsList}
            selectedProj={selectedProj}
            setProjectsList={setProjectsList}
          />
        )}
      </div>
    </>
  );
};

export default App;
