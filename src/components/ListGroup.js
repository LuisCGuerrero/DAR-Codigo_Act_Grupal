import React from "react";
import ListItem from "./ListItem";
import "./styles/ListGroup.css";

function ListGroup({ listData, title }) {
  return (
    <div>
      <h2> {title} </h2>
      <div className="list-group">
        {listData.map((list) => (
          <ListItem
            key={list.id}
            image={list.image}
            title={list.title}
            description={list.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ListGroup;

