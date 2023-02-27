import React from "react";

function Card(props) {
  function TriggerFunc(event) {
    event.preventDefault();
    const title = event.nativeEvent.path[3][0].value;
    const task = event.nativeEvent.path[3][1].value;
    props.RemoveElement({ title, task });
  }
  return (
    <div id={props.node.title} className="card-div">
      <form action="" className="task-created">
        <input
          type="text"
          name="task-id"
          id="task-id"
          placeholder="Title goes here..."
          value={props.node.title}
          disabled
        />
        <textarea
          name="task"
          id="task"
          cols="10"
          rows="7"
          placeholder="Task Description goes here..."
          value={props.node.task}
          disabled
        ></textarea>
        <div className="card-bottom">
          <span>
            {new Date().toLocaleDateString([], { dateStyle: "full" }) +
              " " +
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
          </span>
          <button onClick={TriggerFunc} value="hai">
            <i className="fa-regular fa-trash"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Card;
