import SearchKey from "./Components/search";
import Card from "./Components/Card";
import React, { useRef, useState } from "react";
import InputCard from "./Components/InputCard";

function App() {
  const [passTask, setTasks] = useState([]);
  const [searchTask, setSearchTask] = useState([]);
  function SetTask(taskHere) {
    setTasks([...passTask, taskHere]);
  }

  function ModifyTasks(obj) {
    let newTask = [];
    let newSearchTask = [];
    for (let i of passTask) {
      if (i.title !== obj.title && i.task !== obj.task) {
        newTask.push(i);
      }
    }
    for (let i of searchTask) {
      if (i.title !== obj.title && i.task !== obj.task) {
        newSearchTask.push(i);
      }
    }
    setTasks(newTask);
    setSearchTask(newSearchTask);
  }

  const mainWindow = useRef(null);
  const searchWindow = useRef(null);

  function DisplaySearch(searchValue) {
    if (searchValue !== "") {
      mainWindow.current.style.display = "none";
      searchWindow.current.style.display = "grid";
      let newSearch = [];
      for (let i of passTask) {
        const regExp = new RegExp(searchValue.toLowerCase());
        if (regExp.test(i.title.toLowerCase())) {
          console.log(i);
          if (!newSearch.includes(i)) newSearch.push(i);
        }
      }
      setSearchTask(newSearch);
    } else {
      setSearchTask([]);
      mainWindow.current.style.display = "grid";
      searchWindow.current.style.display = "none";
    }

    for (let i of passTask) {
      if (i.title.includes(searchValue)) {
      }
    }
  }

  return (
    <div className="container">
      <div className="navbar">
        <h1>Notes</h1>
        <SearchKey OnSearch={DisplaySearch} />
      </div>
      <div className="main" ref={mainWindow}>
        {passTask.map((node, key) => {
          return <Card key={key} node={node} RemoveElement={ModifyTasks} />;
        })}
        <InputCard OnTask={SetTask} />
      </div>
      <div className="search-window" ref={searchWindow}>
        {searchTask.map((node, key) => {
          return <Card key={key} node={node} RemoveElement={ModifyTasks} />;
        })}
      </div>
    </div>
  );
}

export default App;
