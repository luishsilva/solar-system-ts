// SPACE DATA EXERCISE 5
// Return an array with all Planets' names with a massValue greater or equal to a given number (1-7)
// Return example: ['name1', 'name2', ... , 'nameN']
// Note: This input should be destructured from the function parameter
import { data } from '../data/data';

interface PlanetType {
  id: string,
  name: string,
  isPlanet: boolean,
  mass: { massValue: number, massExponent: number },
  vol: { volValue: number, volExponent: number },
  gravity: number,
  avgTemp: number,
  moonsCount?: number,
  moons?: string[],
}

interface MethodType {
  planets: PlanetType[];
  greaterThanOrEqualTo: number;
}

export function getPlanetNamesWithMassValue({
  planets,
  greaterThanOrEqualTo,
}: MethodType) {
  const result = planets
    .filter(planet => planet.mass.massValue >= greaterThanOrEqualTo)
    .map(planet => planet.name);
  return result;
}

const { planets } = data;

const param = {
  planets: planets,
  greaterThanOrEqualTo: 5.97237
}

getPlanetNamesWithMassValue(param)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-5"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
