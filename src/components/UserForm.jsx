import React, { useState } from "react";

function UserForm({ addTask }) {
  const [userInput, setUserInput] = useState("");
  const [input, setInput] = useState("");
  console.log(input);
  function handleCange(e) {
    setUserInput(e.target.value);
  }
  function hendelSubmit(e) {
    e.preventDefault();

    if (input.trim().length !== 5) {
      addTask(userInput, input);

      setUserInput("");
      setInput("");
    }
  }
  function inpunHandler(e) {
    setInput(e.target.value);
  }
  return (
    <form onSubmit={hendelSubmit}>
      <input type="number" onChange={inpunHandler} value={input} />
      <input value={userInput} onChange={handleCange} type="text" />
      <button type="submit">add</button>
    </form>
  );
}

export default UserForm;
