// TODO: Comment code

const randomNumberBetween = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const sleepTimer = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const getTimestamp = () => {
    return new Date().getTime();
}

const getTimestampInSeconds = () => {
    return Math.floor(getTimestamp() / 1000);
}

const memoize = (fn) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);

        const result = fn(...args);
        cache.set(key, result);
        return result;
    }
}

const memoizeWithExpiration = (fn, expirationTime) => {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);

        const result = fn(...args);
        cache.set(key, result);
        setTimeout(() => cache.delete(key), expirationTime);
        return result;
    }
}

export default {
    randomNumberBetween,
    sleepTimer,
    getTimestamp,
    getTimestampInSeconds,
    memoize,
    memoizeWithExpiration
};