function composeString(val: number) : string {
    return `Composed string: ${val}`;
   }
   function writeValue(val?: number) {
    console.log(typeof(composeString(val ?? 100)));
   }
 //   writeValue("London");
   writeValue(50);
   writeValue();