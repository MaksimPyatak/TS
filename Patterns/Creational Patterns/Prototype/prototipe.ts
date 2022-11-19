class PrototypeCup {
   private form: string = "teacup";
   public volume: number;
   public color: string;

   constructor(volume: number, color: string) {
      this.volume = volume;
      this.color = color;
   }

   public clone(): this {
       const clone = Object.assign({}, this);      
       return clone;
   }
}
function createCup() {
   const Cup = new PrototypeCup(150, "yelow");
   
   const bigCup = Cup.clone();
   const smallCup = Cup.clone();
   if (bigCup.volume == smallCup.volume) {
       console.log(' Yay!');
       console.log(bigCup);
       console.log(smallCup);       
   } else {
       console.log('Booo!');
       console.log(bigCup);
       console.log(smallCup);  
   }

   bigCup.volume = 400;  
   console.log(bigCup);
   console.log(smallCup);    

}
createCup();