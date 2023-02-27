import React from "react";

function InputCard(props) {
  function TriggerFunc(event) {
    event.preventDefault();
    let title = document.getElementById("task-id-save").value;
    let task = document.getElementById("task-save").value;
    const obj = {
      title: title,
      task: task,
    };
    props.OnTask(obj);
    document.getElementById("form").reset();
  }
  return (
    <div className="card-div">
      <form onSubmit={TriggerFunc} className="save-card" id="form">
        <input
          type="text"
          name="task-id"
          id="task-id-save"
          className="task-id"
          placeholder="Title goes here..."
          required
          autoComplete="off"
        />
        <textarea
          name="task"
          id="task-save"
          cols="10"
          rows="7"
          placeholder="Task Description goes here..."
          required
          autoComplete="off"
        ></textarea>
        <div className="form-bottom">
          <button type="submit">save</button>
        </div>
      </form>
    </div>
  );
}

export default InputCard;
