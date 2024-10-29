// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

import { data } from "../data/data";

interface PlanetsType {
    name: string
}

export function getPlanetNames(planets: PlanetsType[]) {
    return planets.map(planet => planet.name);
    
}
const { planets } = data;

getPlanetNames(planets);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
