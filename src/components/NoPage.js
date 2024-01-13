import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles/NoPage.css";

function NoPage() {
  const navigate = useNavigate();

  return (
    <div className="no-page">
      <h1>404</h1>
      <p>Página no encontrada</p>
      <button onClick={() => navigate("/")}>Ir al Inicio</button>
    </div>
  );
}

export default NoPage;
