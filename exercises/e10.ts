// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// make sure that you destructure your parameters
import { data } from '../data/data';

interface Asteroid {
    name: string, 
    discoveryYear: number, 
    orbitalPeriod: number
}

interface Data {
    asteroids: Asteroid[];
}

interface AsteroidData {
    allData: Data,
    asteroidName: string
}

export function getAsteroidDataByName({ allData, asteroidName }: AsteroidData) {
    const result = allData.asteroids.find(asteroid => asteroid.name === asteroidName)
    return result;
}

const param = {
    allData: data,
    asteroidName: '6 Hebe'
  }

getAsteroidDataByName(param)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
