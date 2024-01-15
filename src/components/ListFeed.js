import React from "react";
import ListGroup from "./ListGroup";
import "./styles/ListGroup.css";

const listDataForYou = [
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

const listDataPersonal = [
  {
    id: 1,
    image: "/img/ListFeed/personal1.png",
    title: "En bucle",
    description: "Tus canciones favoritas del momento",
  },
  {
    id: 2,
    image: "/img/ListFeed/personal2.png",
    title: "Tu capsula del tiempo",
    description: "Te hemos hecho una lista de reproducción personalizada con canciones para viajar a momentos pasados.",
  },
  {
    id: 3,
    image: "/img/ListFeed/personal3.png",
    title: "Ruta diaria",
    description: "Un mix de noticias y música, hecho para ti"
  },
  {
    id: 4,
    image: "/img/ListFeed/personal4.png",
    title: "Una y otra vez",
    description: "Tus canciones favoritas de antes"
  }
];

const listDataRecentlyPLayed = [
  {
    id: 1,
    image: "/img/ListFeed/likedSongs.png",
    title: "Canciones que te gustan",
    description: "4077 canciones",
  },
  {
    id: 2,
    image: "/img/ListFeed/mammaMiaIcon.jpeg",
    title: "Mamma Mia! The Movie Soundtrack",
    description: "Cast of Mamma Mia! The Movie",
  },
  {
    id: 3,
    image: "/img/ListFeed/OT2023.jpeg",
    title: "Operación Triunfo 2023",
    description: "Todas las canciones de la Gala 6 y anteriores de OT 2023",
  },
  {
    id: 4,
    image: "/img/ListFeed/starboy.jpeg",
    title: "Starboy",
    description: "The Weeknd",
  },
  {
    id: 4,
    image: "/img/ListFeed/mp3Emilia.jpeg",
    title: ".mp3",
    description: "Emilia",
  },
  {
    id: 5,
    image: "/img/ListFeed/reputation.jpeg",
    title: "reputation",
    description: "Taylor Swift",  
  }
]

const listDataPopUpInternational = [
  {
    id: 1,
    image: "/img/ListFeed/1989.jpeg",
    title: "1989 (Taylor's Version)",
    description: "Taylor Swift",
  },
  {
    id: 2,
    image: "/img/ListFeed/guts.jpeg",
    title: "Guts",
    description: "Olivia Rodrigo",
  },
  {
    id: 3,
    image: "/img/ListFeed/popUp.jpeg",
    title: "Pop Up",
    description: "Super mega hits! Foto: Ariana Grande",
  },
  {
    id: 4,
    image: "/img/ListFeed/golden.jpeg",
    title: "Golden",
    description: "Jung Kook",
  },
  {
    id: 5,
    image: "/img/ListFeed/gloria.jpeg",
    title: "Gloria",
    description: "Sam Smith",
  },
  {
    id: 6,
    image: "/img/ListFeed/thisIsHarryStyles.jpg",
    title: "This Is Harry Styles",
    description: "This is Harry Styles. Los temas esenciales, todos en una lista.",
  }
]


function ListFeed() {
  return (
    <div className="list-feed">
      <ListGroup listData={listDataForYou} title={"Hecho para ti"} />
      <ListGroup listData={listDataPersonal} title={"100% Personal"} />
      <ListGroup listData={listDataRecentlyPLayed} title={"Escuchado recientemente"} />
      <ListGroup listData={listDataPopUpInternational} title={"Pop Up: El mejor pop internacional"} />
    </div>
  );
}

export default ListFeed;