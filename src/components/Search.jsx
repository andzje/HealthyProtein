import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.trim()) {
      navigate(`/searched/${input}`);
    } else {
      navigate("/searched");
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="search">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          placeholder="Sök"
          onChangeCapture={(e) => setInput(e.target.value)}
        />
      </div>
    </form>
  );
}

export default Search;
