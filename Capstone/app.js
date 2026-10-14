console.log("--- Initializing Inventory System ---");
let inventory = [
    { name: "Laptop", price: 800 },
    { name: "Mouse", price: 25 }
];
let productName = prompt("Enter new product name:");
let productPrice = Number(prompt("Enter product price:"));

if (productName && productPrice > 0) {

    inventory.push({
        name: productName,
        price: productPrice
    });

    console.log(
        '[Prompt executed: User adds "' +
        productName +
        '" at "$' +
        productPrice +
        '"]'
    );

} else {
    console.log("Invalid product details.");
}
function getCategory(price) {

    if (price < 100) {
        return "Budget";
    } else if (price < 500) {
        return "Standard";
    } else {
        return "Premium";
    }
}
console.log("");
console.log("--- Processing Inventory Roster (forEach) ---");

inventory.forEach(function(product) {

    let category = getCategory(product.price);

    console.log(
        "* Item: " +
        product.name +
        " ($" +
        product.price +
        ") -> Category: " +
        category
    );
});
const calculateTotal = (items) => {

    let total = 0;

    items.forEach(function(product) {
        total += product.price;
    });

    return total;
};
console.log("");
console.log("--- Financial Analytics ---");

let totalValue = calculateTotal(inventory);

console.log("Total Inventory Value: $" + totalValue);

let affordableItems = inventory.filter(function(product) {
    return product.price < 200;
});

let affordableNames = affordableItems.map(function(product) {
    return product.name;
});

console.log(
    "Filtered Affordable Items (Under $200):",
    affordableNames
);
let report = inventory.map(function(product) {
    return product.name.toUpperCase() + ": $" + product.price;
});

console.log("Formatted Report List:", report); 