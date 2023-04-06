import React from "react";
import { DotLoader } from "react-spinners";
import { useState } from "react";

const Load = (props) => {
    const [color, setColor] = useState('hsl(150, 100%, 66%)')
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "",
  };

  return (
    <div className="load">
      <DotLoader
        color={color}
        loading={props.newLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Load;
