
abstract class ShoesCreator {
   sole: string;
   upper: string;
   lacing?: boolean; 
   constructor(sole: string, upper: string, lacing?: boolean) {
      this.sole = sole;
      this.upper = upper;
      this.lacing = lacing;
   }
   abstract factoryMathod(sole: string, upper: string, lacing?: boolean): Shoe;
   
   public messageOfCreated () {
      const shues = this.factoryMathod(this.sole, this.upper, this.lacing);
      const message = shues.made(this.sole, this.upper);
      console.log(message);      
      return shues;
   }
}

class SliponsCreator extends ShoesCreator {
   constructor(sole: string, upper: string) {
     super(sole, upper)
   }
   factoryMathod(sole: string, upper: string) {
      return new Slipons(sole, upper)
   }
} 

class OxfordsCreator extends ShoesCreator {
   constructor(sole: string, upper: string, lacing: boolean) {
     super(sole, upper, lacing)
   }
   factoryMathod(sole: string, upper: string, lacing: boolean) {
      return new Oxfords(sole, upper, lacing)
   }
} 

interface Shoe {
   sole: string;
   upper: string;
   lacing?: boolean;
   made(sole: string, upper: string): string;
}

class Slipons implements Shoe {
   sole: string;
   upper: string;

   constructor (sole: string, upper: string){
      this.sole = sole;
      this.upper = upper;
   }

   made() {
      return `This ${this.sole} slipons mades with the ${this.sole} sole and the ${this.upper} upper and without lacing`;      
   }
}
class Oxfords {
   sole: string;
   upper: string;
   lacing: boolean;

   constructor(sole: string, upper: string, lacing: boolean) {
      this.sole = sole;
      this.upper = upper;
      this.lacing = lacing;
   }
   made() {
      return `This ${this.sole} oxfords mades with ${this.sole} sole and ${this.upper} upper and lacing`;      
   }
}
function clientCode(sole: string, upper: string, lacing?: boolean) {
   if (sole && upper && lacing) {     
      let creator =  new OxfordsCreator(sole, upper, lacing);
      let newShoes = creator.messageOfCreated(); 
      return newShoes;
   } else if (sole && upper) {
      let creator =  new SliponsCreator(sole, upper);
      let newShoes = creator.messageOfCreated(); 
      return newShoes;
   } else {
      console.log(`It is impossible to make shoes`); 
   } 
}

let yellowSlipons = clientCode("black", "brown");
console.log(yellowSlipons);

let brownOxford  = clientCode("yellow", "brown", true);
console.log(brownOxford);