import React, { useRef } from "react";

const Reference = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <h1>Reference</h1>

      <input type="text" placeholder="Enter your name" ref={inputRef} />
      <button type="submit" onClick={() => console.log(inputRef.current.value)}>
        Submit
      </button>
    </div>
  );
};

export default Reference;
