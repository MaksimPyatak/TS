class Context {
   private strategy: Strategy;

   constructor (strategy:Strategy) {
      this.strategy = strategy;
   }

   public setStrategy(strategy:Strategy): void {
      this.strategy = strategy;
   }

   public doSameOperation(text: string): void {
      console.log(`Друкую отриманий текст післія обробки вибраною стратегієюю`);
      const result = this.strategy.textProcessing(text);
      console.log(result);
      
   }
}

interface Strategy {
   textProcessing(text: string): string;
}

class LowerCaseStrategy implements Strategy {   
   public textProcessing(text:string): string {
      return text.toLowerCase()
   }
}

class UpperCaseStrategy implements Strategy {   
   public textProcessing(text:string): string {
      return text.toUpperCase()
   }
}

console.log("");
const context = new Context(new LowerCaseStrategy());
context.doSameOperation("Testing Text.");
console.log("");
context.setStrategy(new UpperCaseStrategy());
context.doSameOperation("Anther Test Text.")
console.log("");