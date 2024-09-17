import React from 'react';
import { useParams } from 'react-router-dom';

const DetalleProducto = () => {
  const { id } = useParams();

  const productos = [
    { id: 1, nombre: 'Sushi Especial', descripcion: 'Delicioso sushi con ingredientes frescos.' },
    { id: 2, nombre: 'Ramen', descripcion: 'Sopa de fideos con caldo de pollo y cerdo.' },
    { id: 3, nombre: 'Tempura', descripcion: 'Vegetales y mariscos rebozados y fritos.' }
  ];

  const producto = productos.find(p => p.id === parseInt(id));

  return (
    <div className="container mt-4">
      <h2>Detalle del Producto</h2>
      {producto ? (
        <>
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
        </>
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default DetalleProducto;
