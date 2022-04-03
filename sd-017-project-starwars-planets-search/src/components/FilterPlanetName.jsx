import React, { useContext } from 'react';
import TableContext from '../context/TableContext';

function FilterPlanetName() {
  const { filterPlanetName, setFilterPlanetName } = useContext(TableContext);
  return (
    <input
      id="name-filter"
      type="text"
      value={ filterPlanetName.planetName }
      placeholder="Filtrar por nome"
      onChange={ ({ target }) => setFilterPlanetName({ planetName: target.value }) }
    />
  );
}

export default FilterPlanetName;
