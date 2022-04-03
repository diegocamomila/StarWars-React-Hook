// como nao tem certeza da resposta e do tempo é feito de maneira asincrona
import URLPlanets from './constants';

const getPlanets = async () => {
  try {
    const response = await fetch(URLPlanets);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};
export default getPlanets;
// teste de git
