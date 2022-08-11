const products = [
    { id: 1, name: 'phone', price: 20000 },
    { id: 1, name: 'phone', price: 20000 },
    { id: 1, name: 'Phone', price: 20000 },
    { id: 1, name: 'phone', price: 20000 },
    { id: 1, name: 'Laptop', price: 20000 },
    { id: 1, name: 'phone', price: 20000 },
    { id: 1, name: 'Laptop', price: 20000 }
];
// for (const product of products) {
//     console.log(product);
// }

function matchedProducts(products, search) {
    const matched = [];
    for (const product of products) {
        if (product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched;
}

const result = matchedProducts(products, 'phone');
console.log(result);