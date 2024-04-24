import React from "react";
import Jugador from "./Jugador";
import "./JugadoresList.css";

const JugadoresList = ({ jugadores, onEditJugador, onDeleteJugador }) => {
  return (
    <div>
      <h2>Lista de Jugadores</h2>
      <div className="jugadores-list d-flex gap-3 ">
        {jugadores.map((jugador) => (
          <Jugador
            key={jugador.id}
            jugador={jugador}
            onEdit={onEditJugador}
            onDelete={onDeleteJugador}
          />
        ))}
      </div>
    </div>
  );
};

export default JugadoresList;
