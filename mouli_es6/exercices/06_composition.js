/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const concat = (a, b) => [...a, ...b];
console.log(`concat([1, 2, 3], [4, 5, 6])`, concat([1, 2, 3], [4, 5, 6]));
/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (a, b) => [...a, b];
console.log(`push([1, 2, 3], 4)`, push([1, 2, 3], 4));
/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const merge = (a, b) => ({...a, ...b});
console.log(`merge({a: 1, b: 2}, {c: 3, d: 4})`, merge({a: 1, b: 2}, {c: 3, d: 4}));
/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const setName = (a, name) => ({...a, name});
console.log( setName({name: 'toto'}, 'titi'));

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}