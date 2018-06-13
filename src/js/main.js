const _ = require('underscore');

_.each([1, 2, 3, 4, 5], console.log);

// const app = require('./paritals/app');

// import app from './partials/app';
const app = require('./partials/app');

const t = 3;

let m = [t];
m = m.join('');

console.log(m +'123');
app();
