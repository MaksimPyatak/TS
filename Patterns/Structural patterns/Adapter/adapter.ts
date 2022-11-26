class SpeedCar {
   public name: string;
   public speed: number;
   constructor(name:string, speed: number) {
      this.name = name;
      this.speed = speed;
   }
   public declarationSpeed(): void {
      console.log(`The car ${this.name} travels at a speed of ${this.speed} mph.`);      
   }
}

class SpeedAdapter {
   public car: SpeedCar;
   constructor(car: SpeedCar) {
      this.car = car;
   }
   public recalculationSpeed(): number {
      const speedKM = this.car.speed * 1.609344;
      return speedKM;
   }
}

class OverSpeeding {
   public speedAdapter: SpeedAdapter;
   constructor(speedAdapter: SpeedAdapter) {
      this.speedAdapter = speedAdapter;
   }
   public speedComparison() {
      if (this.speedAdapter.recalculationSpeed() > 50) {
         const deltaSpeed = Math.round(this.speedAdapter.recalculationSpeed() - 50);
         console.log(`Speeding by ${deltaSpeed} km/h`);         
      } else {
         console.log(`The speed is not exceeded.`);
      }
   }
}

function speedControl(name:string, speed:number) {
   const car = new SpeedCar(name, speed);
   const speedAdapter = new SpeedAdapter(car);
   const overSpeeding = new OverSpeeding(speedAdapter);
   car.declarationSpeed();
   overSpeeding.speedComparison();
}
speedControl("2544", 55);