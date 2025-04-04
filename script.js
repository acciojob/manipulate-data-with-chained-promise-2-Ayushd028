let outputDiv = document.getElementById("output");

new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 3000);
})
.then((arr) => {
    let evens = arr.filter(num => num % 2 === 0);
    outputDiv.textContent = evens.join(", ");
    return new Promise((resolve) => setTimeout(() => resolve(evens), 1000));
})
.then((evens) => {
    let doubled = evens.map(num => num * 2);
    outputDiv.textContent = doubled.join(", ");
});
