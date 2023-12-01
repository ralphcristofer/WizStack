// TODO: Comment code

import randomNumberBetween from './miscUtils';

const firstTill = (array, n = 1) => {
    if (n === 1) return array[0];
    return array.filter((_, index) => index < n);
}

const lastTill = (array, n = 1) => {
    if (n === 1) return array[array.length - 1];
    return array.filter((_, index) => index >= array.length - n);
}

const sample = (array) => {
    return array[randomNumberBetween(0, array.length - 1 )];
}

const transform = (transformFn, array) => {
    array.reduce((newArray , item) => {
        newArray.push(transformFn(item));
        return newArray;
    });
}

const pluck = (array, key) => {
    return array.map(element => element[key]);
}

const groupBy = (array, key) => {
    return array.reduce((group, element) => {
        const keyValue = element[key]
        return {...group, [keyValue]: [...(group[keyValue] ?? [])]}
    }, {})
}

export default {
    firstTill,
    lastTill,
    sample,
    transform,
    pluck,
    groupBy
}