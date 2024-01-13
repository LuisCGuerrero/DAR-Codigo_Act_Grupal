import React from "react";
import ListItem from "./ListItem";
import "./styles/ListFeed.css";

const listData = [
  {
    id: 1,
    image: "/img/ListFeed/mix1.png",
    title: "Mix diario 1",
    description: "Bad Bunny, Rels B, Mora y más",
  },
  {
    id: 2,
    image: "/img/ListFeed/mix2.png",
    title: "Mix diario 2",
    description: "Halsey, Gracie Abrams, Leanna...",
  },
  {
    id: 3,
    image: "/img/ListFeed/mix3.png",
    title: "Mix diario 3",
    description: "Funzo & Baby Loud, Bizzarrap, WOS y más",
  },
  {
    id: 4,
    image: "/img/ListFeed/mix4.png",
    title: "Mix diario 4",
    description: "Lana Del Rey, Imagine Dragons, The...",
  },
  {
    id: 5,
    image: "/img/ListFeed/mix5.png",
    title: "Mix diario 5",
    description: "Conan Gray, Mitski, girl in red y más",
  },
  {
    id: 6,
    image: "/img/ListFeed/mix6.png",
    title: "Mix diario 6",
    description: "Cruz Cafuné, Quevedo, Cazzu y más",
  },
];

function ListFeed() {
  return (
    <div>
      <h2> Hecho para ti </h2>
      <div className="list-feed">
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

export default ListFeed;
