// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902
// Hint: use a Map data structure instead of an object if you want typescript to be happy

import { data } from '../data/data';

interface Asteroids {
    name: string, 
    discoveryYear: number, 
    orbitalPeriod: number
}

interface AsteroidsYears {
    year: number,
    total: number
}

export function getGreatestDiscoveryYear(asteroids: Asteroids[]) {
    let asteroidsYears: number[] = [];

    for (let i = 0; i < asteroids.length; i++) {
        const discoveryYear = asteroids[i]?.discoveryYear;
        if (discoveryYear) {
            asteroidsYears.push(discoveryYear);
        }
    }

    const yearsCount: { [year: number]: number } = {};

    for ( const year of asteroidsYears) {
        yearsCount[year] = (yearsCount[year] || 0) + 1;
    }

    let greatestDiscoveryYear = 0;
    let count = 0;

    for (const year in yearsCount) {
        if( yearsCount[year]) {
            if( yearsCount[year]! > count) {
                count = yearsCount[year]!
                greatestDiscoveryYear = parseInt(year, 10);
            }
        }
    }

    return greatestDiscoveryYear;
}

const { asteroids } = data;

getGreatestDiscoveryYear(asteroids)

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
