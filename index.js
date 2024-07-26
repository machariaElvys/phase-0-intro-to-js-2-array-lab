let cats = ["Milo", "Otis", "Garfield"]

 destructivelyAppendCat = (name) => {
cats.push(name)
 }

 destructivelyPrependCat = (name) =>{
    cats.unshift(name)
 }

 destructivelyRemoveLastCat = () => {
    cats.pop()
 }
 destructivelyRemoveFirstCat = () => {
    cats.shift()
 }
 appendCat = (name) => {
    return [...cats, name]
 }
 prependCat = (name) => {
    return [name, ...cats]
 }
 removeLastCat = () => {
    return cats.slice(0, -1)
 }
 removeFirstCat = () => {
    return cats.slice(1)
 }