function writeValue(val: string | number, ...extraInfo: string[]) {
   console.log(`Value: ${val}, Extras: ${extraInfo}`)
  }
  writeValue("London", "Raining", "Cold","Dubline","Cold");
  writeValue("Paris", "Sunny");
  writeValue(100,"Dubline","Cold","10");