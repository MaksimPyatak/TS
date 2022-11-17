interface Shoes {
   firstPart: "sole";
   secondPart: "mainPart";
}
interface Sneakers {
name: "sneakers";
laces: "laces";
}

//let Shoes: Shoes {
//   firstPart = 'sole',
//   secondPart = 'mainPart',
//}


interface Sandals {
   name: "sandals";
   strabs: "strabs";
}

class Sneakers implements Sneakers, Shoes {
   firstPart: "sole" = 'sole';
   secondPart: "mainPart" = 'mainPart';

   constructor(pt:Sneakers) {
      this.firstPart
      this.secondPart
   }
   createShoes(): void {
      console.log(`We used the ${this.firstPart}, ${this.secondPart}, ${this.laces} to create ${this.name}`);      
   }
}

class Sandals implements Sandals, Shoes {
   firstPart: "sole" = 'sole';
   secondPart: "mainPart" = 'mainPart';

   constructor(pt:Sandals) {
      this.firstPart
      this.secondPart
   }
   createShoes(): void {
      console.log(`We used the ${this.firstPart}, ${this.secondPart}, ${this.strabs} to create ${this.name}`);      
   }
}