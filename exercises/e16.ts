// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler

export function find(array: number[], callback: (value: number) => boolean) {
    let returnArray: number[] = [];
    array.forEach(element => {
        if (callback(element)) {
            returnArray.push(element)
        }
    });
    console.log(returnArray)
    return returnArray;
}

const array = [1,2,3];
const callbackResult = (value: number) => value === 2

find(array, callbackResult)
