let outputDiv = document.getElementById("output");

new Promise((resolve) => {
    setTimeout(() => resolve([1, 2, 3, 4]), 100); 
})
.then((arr) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let evens = arr.filter(num => num % 2 === 0);
            outputDiv.textContent = evens.join(", ");
            resolve(evens);
        }, 1000);
    });
})
.then((evens) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let doubled = evens.map(num => num * 2);
            outputDiv.textContent = doubled.join(", ");
            resolve(doubled);
        }, 2000);
    });
});
