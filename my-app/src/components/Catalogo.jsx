import React from 'react';
import { Link } from 'react-router-dom';

const Catalogo = () => {
  const productos = [
    { id: 1, nombre: 'Sushi Especial', descripcion: 'Delicioso sushi con ingredientes frescos.' },
    { id: 2, nombre: 'Ramen', descripcion: 'Sopa de fideos con caldo de pollo y mariscos.' },
    { id: 3, nombre: 'Tempura', descripcion: 'Vegetales y mariscos rebozados y fritos.' }
  ];

  return (
    <div className="container mt-4">
      <h2>Catálogo de Productos</h2>
      <div className="row">
        {productos.map(producto => (
          <div key={producto.id} className="col-md-4">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{producto.nombre}</h5>
                <p className="card-text">{producto.descripcion}</p>
                <Link to={`/producto/${producto.id}`} className="btn btn-dark">
                  Ver Detalle
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalogo;

