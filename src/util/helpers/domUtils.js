// TODO: Comment code

const addGlobalEventListener  = (type, selector, callback, options, parent = document) => {
    parent.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    }, options);
}

const qs = (selector, parent = document) => {
    return parent.querySelector(selector);
}

const qsa = (selector, parent = document) => {
    return parent.querySelectorAll(selector);
}

export default {
    addGlobalEventListener,
    qs,
    qsa
}