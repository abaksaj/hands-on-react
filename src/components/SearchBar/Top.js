import React, { useState } from "react";
import Down from "../Down/Down";

const Top = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setIncrement((count) => count + 1);
  };

  return (
    <div>
      <p>
        Result of increment: <strong>{increment}</strong>
      </p>
      <Down> onIncrementClick={handleIncrement}</Down>
    </div>
  );
};



