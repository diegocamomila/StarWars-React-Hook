import React from 'react';
import './App.css';
import Table from './components/Table';
import TableProvider from './context/TableProvider';
import FilterPlanetName from './components/FilterPlanetName';
import FilterPlanetNumerically from './components/FilterPlanetNumerically';

function App() {
  return (
    // o provaider engloba os filhos
    <TableProvider>
      <FilterPlanetName />
      <FilterPlanetNumerically />
      <Table />
    </TableProvider>

  );
}

export default App;
// teste de git
