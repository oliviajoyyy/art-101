/**
 * ART 101
 * Exercise 5 - Phase 2
 * Code by Olivia Joy Cacdac
 */

// 30 x 30
// My numerical grid array
let ocGridarr1 = [ // pokemon - eevee
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0],
    [0, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 1, 1, 2, 2, 1, 0],
    [0, 0, 1, 3, 3, 1, 0, 1, 1, 1, 1, 1, 0, 1, 3, 3, 3, 1, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 1, 0],
    [0, 0, 1, 3, 3, 1, 1, 3, 3, 3, 3, 3, 1, 3, 3, 3, 3, 1, 0, 0, 0, 1, 3, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 1, 0, 0, 0, 1, 3, 3, 2, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 9, 1, 3, 3, 9, 1, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 2, 2, 2, 2, 1, 0],
    [0, 0, 0, 0, 1, 3, 1, 1, 3, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 2, 1, 0, 0],
    [0, 0, 0, 0, 1, 3, 1, 1, 3, 3, 1, 1, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 1, 1, 3, 3, 1, 0, 0, 0, 0, 0, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 2, 1, 3, 3, 3, 3, 1, 2, 1, 1, 0, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 2, 1, 3, 3, 3, 3, 1, 3, 3, 3, 1, 1, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 3, 3, 3, 3, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 1, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 1, 2, 2, 1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 3, 3, 1, 1, 3, 3, 3, 1, 1, 1, 1, 1, 3, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 1, 3, 1, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 3, 3, 1, 3, 3, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

// 30 x 30
// My text grid array
let ocTextarr = [ // pokemon - charmander
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "hp", "hp", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "hp", "head", "head", "head", "head", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "hp", "head", "head", "head", "head", "head", "head", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "hp", "head", "head", "head", "head", "head", "head", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "hp", "head", "head", "sparkle", "eye", "head", "head", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "hp", "head", "head", "head", "eye", "eye", "head", "head", "head", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "hp", "head", "head", "head", "head", "eye", "eye", "head", "head", "head", "body", "hp", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "hp", "head", "head", "head", "head", "head", "head", "head", "head", "head", "body", "hp", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "hp", "head", "head", "head", "head", "head", "head", "head", "head", "head", "body", "body", "hp", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "hp", "head", "head", "head", "head", "head", "head", "head", "head", "body", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "hp", "fire", "fire", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "hp", "head", "head", "head", "head", "head", "head", "body", "body", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "bg", "hp", "fire", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "hp", "hp", "head", "head", "head", "body", "body", "arm", "body", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "hp", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "body", "body", "body", "arm", "body", "body", "body", "body", "body", "hp", "hp", "bg", "bg", "hp", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "body", "body", "body", "arm", "body", "body", "body", "body", "body", "body", "hp", "bg", "bg", "hp", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "belly", "body", "body", "arm", "body", "body", "arm", "body", "body", "body", "hp", "hp", "hp", "tail", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "belly", "belly", "body", "arm", "body", "body", "arm", "body", "body", "body", "hp", "tail", "tail", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "belly", "belly", "belly", "body", "arm", "arm", "body", "body", "body", "body", "hp", "tail", "tail", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "belly", "belly", "belly", "body", "body", "body", "body", "body", "body", "body", "hp", "tail", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "belly", "belly", "belly", "belly", "body", "body", "body", "body", "body", "body", "hp", "tail", "tail", "tail", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "hp", "body", "hp", "belly", "belly", "belly", "belly", "body", "body", "body", "body", "hp", "tail", "tail", "hp", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "hp", "body", "hp", "belly", "belly", "belly", "belly", "hp", "body", "body", "body", "hp", "hp", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "hp", "body", "body", "hp", "hp", "hp", "hp", "body", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "hp", "body", "body", "hp", "bg", "bg", "hp", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "hp", "hp", "bg", "bg", "bg", "hp", "body", "body", "body", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "hp", "hp", "hp", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"],
    ["bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg", "bg"]
];

// Jasmine's numerical grid array
var jmGridarr = [ // pokemon - dragonair
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 2, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

// Alyssa's numerical grid array
// pokemon - 
var agGridarr = [  
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 3, 3, 3, 3, 3, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 3, 3, 1, 1, 1, 1, 1, 3, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, , 0, 0, 0,0, 3, 1, 3, 1, 1, 1, 1, 1, 1, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 3, 0, 3, 1, 1, 1, 1, 3, 0, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [3, 3, 0, 0, 0, 0, 0, 0, 3, 1, 3, 3, 3, 1, 1, 1, 1, 3, 3, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [1, 1, 3, 0, 0, 0, 0, 0, 3, 1, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [3, 1, 1, 3, 0, 0, 0, 0, 3, 1, 4, 4, 4, 1, 1, 1, 1, 4, 4, 4, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 3, 0, 0, 0, 0, 3, 1, 4, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 3, 0, 0, 0, 0, 3, 1, 1, 1, 3, 3, 4, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 3, 0, 0, 0, 3, 1, 1, 1, 1, 4, 3, 4, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 3, 0, 0, 3, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 3, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 3, 0, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 3, 3, 1, 1, 3, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 1, 3, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 3, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 3, 1, 1, 1,1, 1, 1, 3, 0, 0, 0, 0, 3, 1, 1, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

let font1;
let font2;
let images = []; // images for eevee
let images2 = []; // images for charmander
let images3 = []; // for dragonair
let currentPage = 0;
let bgc;

function preload()  {
    font1 = loadFont('assets/oswald.ttf');
    font2 = loadFont('assets/bitcraft.ttf');

    images[0] = loadImage('assets/forest.png');
    images[1] = loadImage('assets/black.png');
    images[2] = loadImage('assets/yellow.png');
    images[3] = loadImage('assets/brown.png');
    images[4] = loadImage('assets/white.png');

    images2[0] = loadImage('assets/green.png');
    images2[1] = loadImage('assets/fire.png');
    images2[2] = loadImage('assets/orange-caution.png');
    images2[3] = loadImage('assets/caution.png');
    images2[4] = loadImage('assets/sparkle.png');
    images2[5] = loadImage('assets/log.png');
    images2[6] = loadImage('assets/coal.png');

    images3[0] = loadImage('assets/yellow.png');
    images3[1] = loadImage('assets/sparkle.png');
    images3[2] = loadImage('assets/black.png');
    images3[3] = loadImage('assets/log.png');
}


function setup() {
    createCanvas(1200, 700);
    //bgc = color(0, 60, 90);
    bgc = color(0, 70, 100)
    background(bgc);
    fill(100);
    textAlign(LEFT);
    textFont(font1);
}

function draw() {
    background(bgc);

    if (currentPage == 1) {
        mapNumToMonoPixels(ocGridarr1, 800, 560, 125, 0.5, 100); // extra copy of eevee
        mapTextToColorText(ocTextarr, 500, -40, 90, 1.2, 130); // extra copy of charmander in background
        mapNumToMonoPixels(ocGridarr1, 40, 230, -20, 1.0, 255);
        mapTextToColorText(ocTextarr, 600, 70, 20, 0.8, 255);

        push();
        translate(width-450,30);
        fill(230);
        textSize(20);
        let t = "This page shows the original versions of my numerical gridarray mapping and my text gridarray mapping.\n";
        t += "There are 2 copies of each of these versions on this page, using different positions, rotations, and scales.";
        text(t,0,0,450);  // the 4th argument is the textWidth per line.
        pop();

    } else if (currentPage == 2) {
        // extra copies
        mapTextToFunText(ocTextarr, width-400, height+100, -90, 1.2, 130); // charmander fun text
        mapNumToColorShapes(ocGridarr1, 70, 220, 50, 0.4, 100); // eevee shapes
        mapNumToBitMaps(ocGridarr1, images, width-300, 130, 210, 0.4); // eevee bit maps
        mapTextToBitMaps(ocTextarr, images2, 900, 300, 70, 0.3); // charmander bit maps
        mapTextToColorShapes(ocTextarr, 180, 200, 180, 1.1, 120); // charmander color shapes

        // main
        mapNumToColorShapes(ocGridarr1, width/2, 0, 25, 0.9, 255); // eevee shapes
        mapNumToBitMaps(ocGridarr1, images, width-350, height-250, -5, 0.45); // eevee bit maps
        mapTextToBitMaps(ocTextarr, images2, 200, 50, 15, 0.7); // charmander bit maps
        mapTextToFunText(ocTextarr, -20, height/2 + 50, -5, 0.75, 255); // charmander fun text
        mapTextToColorShapes(ocTextarr, width-350, 100, -20, 1.0, 255); // charmander color shapes

        push();
        translate(130,30);
        fill(230);
        textSize(20);
        let t = "This pages shows each original gridarray remapped in two distinct ways, using different colors, shapes, text, and offsets.\n";
                //+ "There are 2 copies of each of these versions on this page, using different positions, rotations, and scales.";
        text(t,0,0,450);
        pop();
        
    } else if (currentPage == 3) {
        // extra copies
        mapNumToBitMaps(jmGridarr, images3, width/2, height-200, 35, 0.2); // remapping Jasmine's numerical array
        mapNumToColorPixels(agGridarr, width/2, height/2, -20, 1.3, 90); // remapping Alyssa's numerical array

        // main
        mapNumToBitMaps(jmGridarr, images3, width/2, 100, -15, 0.6); // remapping Jasmine's numerical array
        mapNumToColorPixels(agGridarr, 200, 100, 20, 1.0, 255); // remapping Alyssa's numerical array

        push();
        translate(40,30);
        fill(230);
        textSize(20);
        let t = "These are Alyssa's and Jasmine's gridarrays remapped using my functions.\n";
        t += "There are 2 copies of each on this page, using different positions, rotations, and scales."
        text(t,0,0,450);
        pop();

        push();
        translate(width/4, 130);
        rotate(radians(20));
        textSize(20);
        fill(230);
        text("Alyssa's numerical array", 0, 0, 450);
        pop();

        push();
        translate(width/2, 90);
        rotate(radians(-15));
        textSize(20);
        fill(230);
        text("Jasmine's numerical array", 0, 0, 450);
        pop();

    } else {
        push();
        translate(80,100);
        fill(230);
        textSize(40);
        text ("My groups members were \nAlyssa Guardado and Jasmine Mirzamani.", 0 , 0, 800);
        translate(0,120);
        text ("I have 9 mapped images, copied at least twice \nfor a total of 18 images.", 0, 0, 800);
        translate(250,120);
        pop();

        mapNumToBitMaps(ocGridarr1, images, width/2, 240, 0, 0.7);
    }

}


function keyPressed() { 
    if ( key == '1' ) { 
        console.log("Page 1");
        currentPage = 1;
    } else if ( key == '2' ) { 
        console.log("Page 2");
        currentPage = 2;
    } else if ( key == '3' ) { 
        console.log("Page 3");
        currentPage = 3;   
    } else {
        currentPage = 0;
    }
}


// 2d arr, x, y, rot, scale, alpha
function mapNumToMonoPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx,ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            fill(arr[i][j] * 60, fade); // lower arr value = darker
            rect(j * 12, i * 12, 10, 10);
        }
    }
   pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapNumToColorPixels(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 0 ) { // background
                fill(204, 235, 210, fade); // light green
            } else if ( value == 1 ) { // outline
                fill(247, 238, 176, fade); // grey
            } else if ( value == 2 ) { //
                fill(150, fade); // yellow
            } else if ( value == 3 ) {
                fill(0, fade); // black
            } else {
                fill (255, fade); // white
            }
            rect(j * 12, i * 12, 10, 10); // square
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapNumToColorShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let offset;
    for (var i = 0; i < arr.length; i++) {
        // offset for staggered rows
        if (i % 2 == 0) {
            offset = 3;
        } else {
            offset = -3;
        }
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == 0 ) { // background
                fill(204, 235, 210, fade); // light green
                ellipse(j * 12 + offset, i * 12, 10, 10); // circle
            } else if ( value == 1 ) { // outline
                fill(0, fade); // black
                rect((j * 12)-6 + offset, i * 12-6, 10, 10, 2); // square w curved corners
            } else if ( value == 2 ) { // fur/tail area
                fill(247, 238, 176, fade); // yellow
                ellipse((j * 12) + offset, i * 12, 10, 15); // vertical oval
            } else if ( value == 3 ) { // body
                fill(161, 138, 111, fade);  // brown
                rect((j * 12)-6 + offset, i * 12-6, 10, 10, 2); // square w curved corners
            } else {
                fill (255, fade); // white
                ellipse(j * 12 + offset, i * 12, 15, 10); // horizontal oval
            }
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapTextToColorText(arr, lx, ly, rot, sc, fade) {
    push();
    textSize(15);
    textAlign(CENTER);
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == "bg" ) {
                fill(20,170,0, fade); // green
            } else if ( value == "fire"){
                fill(232, 46, 46, fade); // red
            } else if ( value == "head" || value == "tail") {
                fill(255, 128, 48, fade); // orange
            } else if ( value == "belly") {
                fill(240, 236, 170, fade); // light yellow
            } else if ( value == "body") {
                fill(212, 105, 38, fade); // dark orange
            } else if ( value == "sparkle") {
                fill(255, fade); // white
            } else if ( value == "arm") {
                fill(150, fade); // grey
            } else {
                fill(0, fade); // black
            }
            text(value, j * 25, i * 15, 100); // display string
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapTextToFunText(arr, lx, ly, rot, sc, fade) {
    push();
    textFont(font2);
    textSize(20);
    textAlign(CENTER);
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let offset;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            // for alternating column color shade
            if (j % 2 == 0) {
                offset = -30;
            } else {
                offset = 30;
            }
            let value = arr[i][j];
            textSize(20);
            if ( value == "bg" ) {
                textSize(25);
                fill(235 + offset, 185, 200, fade); // pink or lighter pink
            } else if ( value == "fire"){
                fill(250, 46 + (i*10), 46, fade); // red to orange
            } else if ( value == "head" || value == "tail") {
                fill(255, 128, 48, fade); // orange
            } else if ( value == "belly") {
                textSize(13);
                fill(240, 236, 170, fade); // light yellow
            } else if ( value == "body") {
                fill(212, 105, 38, fade); // dark orange
            } else if ( value == "sparkle") {
                textSize(10);
                fill(255, fade); // white
            } else if ( value == "arm") {
                fill(150, fade); // grey
            } else {
                textSize(10);
                fill(0, fade); // black
            }
            push();
            translate(j * 35, i * 15);
            rotate(radians(30)); // rotate slightly right
            text(value, 0, 0, 100); // display string
            pop();
        }
    }
    pop();
}

// 2d arr, x, y, rot, scale, alpha
function mapTextToColorShapes(arr, lx, ly, rot, sc, fade) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
            let value = arr[i][j];
            if ( value == "bg" ) { // background
                fill(20,170,0, fade); // green
                drawTriangle(j * 12, i *12, 11);
            } else if ( value == "fire" ) { // fire
                fill(232, 46, 46, fade); // red
                drawTriangle(j * 12, i *12, 11);
            } else if ( value == "head") {
                fill(255, 128, 48, fade); // orange
                ellipse(j * 12, i * 12, 17, 12); // horizontal oval
            } else if ( value == "tail") {
                fill(255, 128, 48, fade); // orange
                ellipse(j * 12, i * 12, 12, 17); // vertical oval
            } else if ( value == "belly" ) {
                fill(240, 236, 170, fade); // light yellow
                rect(j * 12-6, i * 12-6, 12, 12, 4); // square w curved corners
            } else if ( value == "body") {
                fill(212, 105, 38, fade); // dark orange
                rect(j * 12-6, i * 12-6, 12, 12, 3); // square w curved corners
            } else if ( value == "sparkle") {
                fill(255, fade); // white
                drawTriangle(j * 12, i *12, 7);
            } else if ( value == "arm") {
                fill(150, fade); // grey
                ellipse(j * 12, i * 12, 10, 15); // vertical oval
            } else {
                fill(0, fade); // black
                rect(j * 12-5, i * 12-7, 10, 14, 2); // square w curved corners
            }
        }
    }
    pop();
}

// x, y, size
function drawTriangle(lx, ly, sz) {
    push();
    translate(lx, ly);
    triangle(0, -sz, sz, sz, -sz, sz);
    pop();
}

// 2d arr, image arr, x, y, rot, scale, alpha
function mapTextToBitMaps(arr, imgarr, lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let nuimg;
    let offset; // offset for staggered rows
    for (var i = 0; i < arr.length; i++) {
        if (i % 3 == 0) {
            offset = 3;
        } else if (i % 3 == 1) {
            offset = 9;
        } else {
            offset = 12;
        }
        console.log(offset);
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == "bg" ) {
                tint(30, 100, 210);
                nuimg = imgarr[0]; // leaves
            } else if ( value == "fire"){
                nuimg = imgarr[1]; // fire
            } else if ( value == "head" || value == "tail") {
                nuimg = imgarr[2]; // warning sign
            } else if ( value == "belly") {
                nuimg = imgarr[3]; // caution sign
            } else if ( value == "body") {
                tint(252, 159, 106); // dark orange tint
                nuimg = imgarr[2]; // warning sign
            } else if ( value == "sparkle") {
                nuimg = imgarr[4]; // star
            } else if ( value == "arm") {
                nuimg = imgarr[5]; // log
            } else {
                nuimg = imgarr[6]; // coal
            }
            image(nuimg, j * 15 + offset, i * 15, 15, 15); // draw img
            noTint();
        }
    }
    pop();
}

// 2d arr, image arr, x, y, rot, scale, alpha
function mapNumToBitMaps(arr, imgarr, lx, ly, rot, sc) {
    push();
    translate(lx, ly);
    rotate(radians(rot));
    scale(sc);
    let sz = 20;
    let nuimg;
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr[0].length; j++) {
             let value = arr[i][j];
             if ( value == 0) {
                nuimg = imgarr[0]; // 
            } else if ( value == 1){
                nuimg = imgarr[1]; // 
            } else if ( value == 2) {
                nuimg = imgarr[2]; // 
            } else if ( value == 3) {
                nuimg = imgarr[3]; // 
            } else {
                nuimg = imgarr[4]; // 
            }
            image(nuimg, j * sz, i * sz, sz, sz); // draw img
        }
    }
    pop();
}
