// see e16.md

// DO NOT USE `any` for this, you will need to use generics in order to pass both the vitest tests and the tsc compiler

export function find<ValueType>(array: ValueType[], callback: (value: ValueType) => boolean): ValueType | undefined {

    for (const element of array) {
        if (callback(element)) {
            return element;
        }
    };

    return undefined;
}

const array = [1,2,3];
const callbackResult = (value: number) => value === 2

console.log(find(array, callbackResult))
