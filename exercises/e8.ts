// SPACE DATA EXERCISE 8
// Return a Planet by a given moon name
//  must have destructured parameters
import { data } from '../data/data';

interface PlanetType {
    name: string;
    moons?: string[];
}

interface MethodType {
    planets: PlanetType[];
    
    moonName: string;
}

export function findPlanetByMoon({ planets, moonName }: MethodType) {
    return planets
    .find(planet => planet.moons?.some(moon => moon.toLocaleLowerCase() === moonName.toLocaleLowerCase()) ?? planet);

}

const { planets } = data;
findPlanetByMoon({planets, moonName: 'triton'})

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
