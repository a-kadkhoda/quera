import { useEffect, useRef, useState } from "react";
function SelectBox() {
  const [inputValue, setInputValue] = useState("");
  const [topics, setTopics] = useState([]);
  const [isEmpty, setIsEmpty] = useState(false);

  const closeStyle = {
    padding: isEmpty ? "inherit" : 0,
    height: isEmpty ? "inherit" : 0,
    overflow: isEmpty ? "inherit" : "hidden",
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    getTopic(value);
    if (value === "") {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const getTopic = async (value) => {
    try {
      const res = await fetch(`http://127.0.0.1:8000/?search=${value}`);
      const { data } = await res.json();
      setTopics(data.matchedTechs);
    } catch (error) {
      console.log("no topic found");
    }
  };

  const handleClick = (topic) => {
    setInputValue(topic);
    setIsEmpty(false);
  };

  return (
    <div className="c-box">
      <input
        className="tpc"
        placeholder="topic"
        type="text"
        value={inputValue}
        onChange={handleChange}
      />
      <div className="c-selectbox" style={closeStyle}>
        {topics.map((topic, index) => {
          return (
            <div
              key={index}
              onClick={() => handleClick(topic.name)}
              className="item"
            >
              <label htmlFor={topic.id}>{topic.name}</label>
              <input type="radio" name="" id={topic.id} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SelectBox;
