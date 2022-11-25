interface DessertBuilder {
   addBasis(): void;
   addApricoteJam(): void;
   addStrawberyJam(): void;
   addChocolate(): void;
}

class IceBuilder implements DessertBuilder {
   private dessert: Ice;
   constructor() {
      this.reset();
   }
   public reset(): void {
      this.dessert = new Ice;
   }
   public addBasis(): void {
      this.dessert.ingredients.push('пломбір')
   }
   public addApricoteJam(): void{
      this.dessert.ingredients.push('абрикосовий джем')
   }
   public addStrawberyJam(): void{
      this.dessert.ingredients.push('полуничний джем')
   }
   public addChocolate(): void{
      this.dessert.ingredients.push('шоколад')
   }
   public getDessert(): Ice {
      const ice = this.dessert;
      this.reset();
      return ice;
   }
}

class Ice {
   public ingredients: string[ ] = [];
   public getIce(): void {
      console.log(`Для приготування використали: ${this.ingredients.join(', ')}`);      
   }
}

class Director {
   private builder: DessertBuilder;
   public setBuilder(builder: IceBuilder): void {
      this.builder = builder;
   }
   public cookApricoteDessert():void {
      this.builder.addBasis();
      this.builder.addApricoteJam();
   }
   public cookChocolateDessert():void {
      this.builder.addBasis();
      this.builder.addChocolate();
   }
}

const director = new Director;
const iceBuilder = new IceBuilder;
director.setBuilder(iceBuilder);
director.cookApricoteDessert();
console.log(`Абрикосове морозиво`);
iceBuilder.getDessert().getIce();

director.cookChocolateDessert();
console.log(`Шоколадне морозиво`);
iceBuilder.getDessert().getIce();

console.log(`Полуничне морозиво`);

iceBuilder.addBasis();
iceBuilder.addStrawberyJam();
iceBuilder.getDessert().getIce();