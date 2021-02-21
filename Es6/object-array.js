const products = [
    { id: 1, pName: 'watch', price: 100 },
    { id: 2, pName: 'laptop', price: 20 },
    { id: 3, pName: 'tablet', price: 300 },
    { id: 4, pName: 'phone', price: 200 },

]
const names = products.map(function (pname) {
    return pname.pName
})
console.log(names);

// filter
const cheaper = products.filter(pd => pd.price > 100)
console.log("gater than 100 : ", cheaper);

// remove an item using a filter
const remaining = products.filter(pd => pd.id != 3 && pd.id != 4)
console.log("remaining : ", remaining);