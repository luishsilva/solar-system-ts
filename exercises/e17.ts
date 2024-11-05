const people = [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
    { name: "rachel", age: 10 },
  ];

export const minBy = <ValueType, ObjKeyType>(array: ValueType[], callback: (value: ValueType | undefined) => ObjKeyType) => {
   
    if (array.length === 0) return undefined

    let minValue = array[0];
    let minKeyValue = callback(minValue)

    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        let currentKey = callback(currentValue)

        if (currentKey < minKeyValue) {
            minValue = currentValue;
            minKeyValue = currentKey;
        }
    } 

    return minValue;
};

minBy(people, (people) => people?.age)

export function maxBy<ValueType, ObjKeyType>(array: ValueType[], callback: (value: ValueType | undefined) => ObjKeyType) {
    if (array.length === 0) return undefined

    let minValue = array[0];
    let minKeyValue = callback(minValue)

    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i];
        let currentKey = callback(currentValue)

        if (currentKey > minKeyValue) {
            minValue = currentValue;
            minKeyValue = currentKey;
        }
    } 

    return minValue;
}

maxBy(people, (people) => people?.name);