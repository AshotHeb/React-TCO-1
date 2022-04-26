import { useState } from "react";

export const MirrorInput = () => {
  const [inputValue, setInputValue] = useState("");
  const [prevValue, setPrevValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setPrevValue(inputValue);
    setInputValue(value);
  };

  return (
    <div className="mirror-input">
      <input type="text" onChange={handleChange} />
      <p>Current: {inputValue}</p>
      <p>Prev: {prevValue}</p>
    </div>
  );
};
