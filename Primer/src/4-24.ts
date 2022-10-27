class Product {
    constructor(name: string, price: number, category?: string) {
        this.name = name;
        this.price = price;
        this.category = category;
    }
    name: string
    price: number
    category?: string
    printDetails() {
        if (this.category != undefined) {
            console.log(`Name: ${this.name}, Price: ${this.price}, ` +
                `Category: ${this.category}`);
        } else {
            console.log(`Name: ${this.name}, Price: ${this.price}`);
        }
    }
}

let hat = new Product("Hat", 100);
let pant = new Product("Pant",500)
let shirt =new Product("t-shirt", 200, "easy");
let boots = new Product("Boots", 100, "Snow Gear");


// function printDetails(product : { name: string, price: number, category?: string}) {
// if (product.category != undefined) {
// console.log(`Name: ${product.name}, Price: ${product.price}, ` +
// `Category: ${product.category}`);
// } else {
// console.log(`Name: ${product.name}, Price: ${product.price}`);
// }
// }


hat.printDetails();
pant.printDetails();
shirt.printDetails();
boots.printDetails();