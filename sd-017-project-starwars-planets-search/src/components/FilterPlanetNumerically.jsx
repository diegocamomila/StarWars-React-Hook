import React, { useContext } from 'react';
import TableContext from '../context/TableContext';
import { COLUMN } from '../helpers/constants';

function FilterPlanetNumerically() {
  const {
    filterPlanetNumerically,
    setFilterPlanetNumerically,
    column,
    comparison,
    value,
    setValue,
    setColumn,
    setComparison,
  } = useContext(TableContext);

  const removeFilter = (newColumn) => {
    const newFilter = filterPlanetNumerically.filter((data) => data.column !== newColumn);
    setFilterPlanetNumerically(newFilter);
  };

  const handleClick = () => {
    setFilterPlanetNumerically((prevFilter) => [
      ...prevFilter,
      { column: column || 'population', comparison, value },
    ]);
    setColumn('');
    setComparison('maior que');
    setValue('0');
  };

  return (
    <form>
      <label htmlFor="column">
        <select
          value={ column }
          id="column"
          onChange={ ({ target }) => setColumn(target.value) }
        >
          { COLUMN
            .filter((option) => filterPlanetNumerically
              .every((filter) => filter.column !== option)) // nao deixar repetir filtro de coluna
            .map((option) => (<option key={ option }>{ option }</option>))}
        </select>
      </label>
      <label htmlFor="comparison">
        <select
          value={ comparison }
          id="comparison"
          onChange={ ({ target }) => setComparison(target.value) }
        >
          <option>maior que</option>
          <option>menor que</option>
          <option>igual a</option>
        </select>
      </label>
      <label htmlFor="value">
        <input
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
          id="value"
          type="number"
        />
      </label>
      <button
        type="button"
        onClick={ () => handleClick() }
      >
        Filtrar
      </button>
      <section>
        { filterPlanetNumerically
          .map(({ column: coluna, comparison: comparaçao, value: valor }) => (
            <div key={ coluna }>
              <span>{`${coluna} ${comparaçao} ${valor}`}</span>
              <button
                onClick={ () => removeFilter(coluna) }
                type="button"
              >
                X
              </button>
            </div>
          ))}
        <button
          type="button"
          disabled={ !filterPlanetNumerically.length }
          onClick={ () => setFilterPlanetNumerically([]) }
        >
          Remover Filtros
        </button>
      </section>
    </form>
  );
}
export default FilterPlanetNumerically;
