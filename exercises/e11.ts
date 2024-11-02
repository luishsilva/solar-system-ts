// SPACE DATA EXERCISE 11
// Return an array of Planets with less than 10 moons
// include planets with 0 moons
import { data } from "../data/data";

interface Planet {
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

export function lowMoonsPlanets(planets: Planet[]) {
    return planets.filter(planet => 
        planet.moonsCount === undefined || planet.moonsCount < 10
    );
}

const { planets } = data;

lowMoonsPlanets(planets);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-11"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
