// SPACE DATA EXERCISE 12
// Return the sum of all moons for all planets
// Return example: 42
import { data } from '../data/data';
import { AllData } from '../types/types';

export const allPlanetsMoonsCount = (data: AllData) => {
    return data.planets.reduce((accumulator, currentValue) => 
        accumulator + (currentValue.moonsCount || 0), 0)
};

allPlanetsMoonsCount(data);

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-12"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
