import React from 'react';
import NavBar from '../components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer.jsx';

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <ItemListContainer greeting="¡Bienvenido a Tokyo!" />
      </main>
    </div>
  );
}

export default App;

