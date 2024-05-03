'use strict'

console.log("Olá");

fetch('http://ws.audioscrobbler.com/2.0/').then((res) => res.json()).then((data) => console.log(data));

