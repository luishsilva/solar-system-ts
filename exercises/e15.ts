// SPACE DATA EXERCISE 15
// Return an array of Planets' without moons

import { data } from '../data/data';

interface Planets {
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

export function getPlanetsWithNoMoons(planets: Planets[]) {
    return planets.filter((planet) => planet.moons === undefined)
}

const { planets } = data;

getPlanetsWithNoMoons(planets)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-15"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
