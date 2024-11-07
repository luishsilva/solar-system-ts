const people = [
    { name: "jon", age: 29 },
    { name: "peter", age: 30 },
    { name: "andrey", age: 22 },
    { name: "rachel", age: 10 },
  ];

// I kept the Generic type as ValueType just for understanding since I'm not used to use Generics
export const minBy = <T>(array: T[], callback: (value: T) => string | number) => {
   
    if (!array[0]) return undefined

    let minValue: T = array[0];

    let callbackValue = callback(minValue);

    for (let item of array) {
        const currentValue = callback(item);
        if (currentValue < callbackValue) {
            minValue = item;
            callbackValue = currentValue;
        }
    } 

    return minValue;
};

minBy(people, (people) => people?.age)

export function maxBy<T>(array: T[], callback: (value: T | T) => string | number) {
    if (!array[0]) return undefined

    let maxValue: T = array[0];
    let callbackValue = callback(maxValue);


    for (let item of array) {
        const currentValue = callback(item);
        if (currentValue > callbackValue) {
            maxValue = item;
            callbackValue = currentValue;
        }
    } 

    return maxValue;
}

maxBy(people, (people) => people?.name);