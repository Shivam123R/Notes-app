import React from "react";

function SearchKey(props) {
  function handleChange(event) {
    const eventValue = event.target.value;
    const regexExp = new RegExp(/\w/);
    if (!regexExp.test(eventValue)) {
      event.target.value = "";
    }
    props.OnSearch(event.target.value);
  }
  return (
    <div className="input">
      <input
        type="text"
        name="search-key"
        id="search-key"
        className="input-field"
        placeholder="Search Your Task..."
        onChange={handleChange}
      />
      <i className="fa-regular fa-folder-magnifying-glass label"></i>
    </div>
  );
}

export default SearchKey;
