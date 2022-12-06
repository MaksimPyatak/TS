class Conditioner {
   private state: State;
   public temperature: number;

   constructor (state: State,temperature: number) {
      this.transitionTo(state);
      this.temperature = temperature;
   }

   public transitionTo(state:State): void {
      console.log(`Працює в режимі ${(<any>state).constructor.name}`);
      this.state = state;
      this.state.setEquipment(this);
   }

   public cooling(): void {
      this.state.coolingOperation(this.temperature);
   }
   public heating(): void {
      this.state.heatingOperation(this.temperature)
   }
}

abstract class State {
   protected equipment: Conditioner;

   public setEquipment(equipment:Conditioner): void {
      this.equipment = equipment;
   }
   
   public abstract coolingOperation(temperature: number): void;
   public abstract heatingOperation(temperature: number): void;
}

class Coldly extends State {
   public coolingOperation(temperature: number): void{
      if (temperature > 22) {
         console.log(`Відбувається охолодження`);         
      } else {
         console.log(`Температура в приміщенні занизька. Потрібно підігріти.
         Зміна режиму`);         
         this.equipment.transitionTo(new Hot())
         this.equipment.heating();
      }
   }
   public heatingOperation(temperature: number): void {
      if (temperature > 22) {
         console.log(`Температура зависока, підігрів повітря непотрібен`);         
      } else {
         console.log(`Непідходящийрежим. Потрібно змінити режим.
         Зміна режиму`);         
         this.equipment.transitionTo(new Hot())
         this.equipment.heating();
      }
   }
}

class Hot extends State {
   public coolingOperation(temperature: number): void{
      if (temperature < 22) {
         console.log(`${temperature}°C Температура занизька, охолодження повітря непотрібено.`);       
      } else {
         console.log(`${temperature}°C Непідходящий режим. Потрібно змінити режим.
         Зміна режиму`);        
         this.equipment.transitionTo(new Coldly());
         this.equipment.cooling();
      }
   }
   public heatingOperation(temperature: number): void {
      if (temperature < 22) {
         console.log(`${temperature}°C Відбувається підігрів повітря.`);         
      } else {
         console.log(`${temperature}°C Непідходящийрежим. Потрібно змінити режим.
         Зміна режиму`);         
         this.equipment.transitionTo(new Coldly());
         this.equipment.cooling();
      }
   }
}

console.log(``);
let conditioner = new Conditioner(new Hot, 23);
conditioner.cooling();
console.log(``);
conditioner.heating();
console.log(``);

conditioner = new Conditioner(new Hot, 21);
conditioner.cooling();
console.log(``);
conditioner.heating();

console.log(``);