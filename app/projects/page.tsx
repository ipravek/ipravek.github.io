import React from "react";
import Card from "@/components/card/card";

const Projects = () => {
  return (
    <div>
      Projects
      <>
        {[...Array.from(Array(10).keys())].map((e, idx) => {
          return <Card title={e.toString()} key={idx} />;
        })}
      </>
    </div>
  );
};

export default Projects;
