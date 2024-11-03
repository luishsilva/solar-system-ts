// SPACE DATA EXERCISE 14
// Return the sum of orbital periods of all asteroids
// Return example: 234234.234
import { data } from '../data/data';

interface Asteroid {
    name: string, 
    discoveryYear: number, 
    orbitalPeriod: number
}

interface AsteroidsData {
    asteroids: Asteroid[]
}

export function getOrbitalPeriodsSum(asteroid: AsteroidsData) {
    return data.asteroids.reduce((accumulator, currentValue) => accumulator + currentValue.orbitalPeriod, 0);
}

getOrbitalPeriodsSum({asteroids: data.asteroids});

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
