const comparisonOperator = ({ column, comparison, value }, data) => {
  if (comparison === 'maior que') {
    return (Number(data[column]) > Number(value));
  }
  if (comparison === 'menor que') {
    return (Number(data[column]) < Number(value));
  }
  return (Number(data[column]) === Number(value));
};
export default comparisonOperator;
