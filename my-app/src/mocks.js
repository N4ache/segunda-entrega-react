const products = [
    { id: '1', name: 'Sushi de Salmón', description: 'Delicioso sushi con salmón fresco.', price: 9900 },
    { id: '2', name: 'Ramen Tradicional', description: 'Ramen con caldo de miso y carne de cerdo.', price: 12000 },
    { id: '3', name: 'Tempura de Camarones', description: 'Camarones tempura crujientes y sabrosos.', price: 10000 }
  ];
  
  export const getProductById = async (id) => {
    return new Promise((resolve, reject) => {
      const product = products.find((p) => p.id === id);
      setTimeout(() => {
        product ? resolve(product) : reject('Producto no encontrado');
      }, 1000);
    });
  };
  
  export const getProductsByCategory = async (categoryId) => {
    return new Promise((resolve) => {
      const filteredProducts = products;
      setTimeout(() => {
        resolve(filteredProducts);
      }, 1000);
    });
  };  