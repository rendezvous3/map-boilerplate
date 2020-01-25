import React from "react";

function ListItem(props) {
  const { NAME, ADDRESS, DESCRIPTIO, NOTES } = props;
  return (
    <div className="list-item">
      <h3 className="list-item-title">{NAME}</h3>
      <p className="list-item-desc">{ADDRESS}</p>
      <p className="list-item-desc">{NOTES}</p>
      <p className="list-item-desc">{DESCRIPTIO}</p>
    </div>
  );
}

export default ListItem;
