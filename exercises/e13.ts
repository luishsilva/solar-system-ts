// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53
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

interface PlanetData {
    planets: Planets[];
}

export function getAveragePlanetsTemperature(data: PlanetData) {
    return data.planets.reduce((accumulator, currentValue) => accumulator + currentValue.avgTemp, 0) / data.planets.length;
}

getAveragePlanetsTemperature(data)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
