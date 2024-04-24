import React from 'react';

const Jugador = ({ jugador, onEdit, onDelete }) => {
  const { id, nombre, descripcion, habilidades, seleccionado, categoria, imageUrl } = jugador;

  const handleEditClick = () => {
    console.log("Clic en editar");
    onEdit(jugador); // Pasamos el jugador al hacer clic en editar
  };

  const handleDeleteClick = () => {
    onDelete(id); // Pasamos el ID del jugador al hacer clic en eliminar
  };

  return (
    <div className="jugador d-flex justify-content-center flex-column align-items-center py-4 px-4">
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <ul>
        {habilidades.map((habilidad, index) => (
          <li key={index}>{habilidad}</li>
        ))}
      </ul>
      <p>Patrocinador: {seleccionado}</p>
      <p>Equipo: {categoria}</p>
      {imageUrl && <img width={300} height={200} src={imageUrl} alt="Imagen del jugador" />}
      <div className='d-flex gap-3 justify-content-center mt-3'>
      <button onClick={handleEditClick}>Editar</button>
      <button onClick={handleDeleteClick}>Eliminar</button>
      </div>
    </div>
  );
};

export default Jugador;