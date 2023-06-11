import React from "react";

const HTMLRenderer = ({ htmlString }: { htmlString: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: htmlString }} />;
};

export default HTMLRenderer;
