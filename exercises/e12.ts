// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42
import { data } from '../data/data';

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

interface PlanetData {
    planets: Planet[];
}

export const allPlanetsMoonsCount = (data: PlanetData) => {
    return data.planets.reduce((accumulator, currentValue) => 
        accumulator + (currentValue.moonsCount || 0), 0)
};

// const { planets } = data;

allPlanetsMoonsCount(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
