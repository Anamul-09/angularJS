let hat = {
    name: "Hat",
    price: 100,
    color:"blue"
   };
   let boots = {
    name: "Boots",
    price: 100,
    color:"red"
   }
   function printDetails(product : { name: string, price: number,color:string}) {
    console.log(`Name: ${product.name}, Price: ${product.price},color:${product.color}`);
   }
   printDetails(hat);
   printDetails(boots);