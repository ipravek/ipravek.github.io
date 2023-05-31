import React from "react";
import Card from "@/components/card/card";

const projects = [
  {
    name: "Project Name",
    id: 123,
    backgroundImage: "https://picsum.photos/600/200",
  },
  {
    name: "Project Name",
    id: 123,
    backgroundImage: "https://picsum.photos/600/200",
  },
  {
    name: "Project Name",
    id: 123,
    backgroundImage: "https://picsum.photos/600/200",
  },
  {
    name: "Project Name",
    id: 123,
    backgroundImage: "https://picsum.photos/600/200",
  },
  {
    name: "Project Name",
    id: 123,
    backgroundImage: "https://picsum.photos/600/200",
  },
];

const Projects = () => {
  return (
    <>
      Projects
      <>
        {projects &&
          projects.map((e, idx) => {
            return (
              <Card
                title={e.name}
                bgImage={e.backgroundImage}
                id={e.id.toString()}
                key={idx}
              />
            );
          })}
      </>
    </>
  );
};

export default Projects;
