/**
* Інтерфейс обєктів за зміною стану яких слідкують спостерігачі
*/
interface ISubject {
   /**
    * Прикріпляє спостерігач observer до списку спостерігачів.
    */
   attach(observer: Observer): void;
   /**
    * Відкріплює спостерігач observer від списку спостерігачів.
    */
   detach(observer: Observer): void;
   /**
    * Повідомляє всіх спостерігачів про подію.
    */
   notify(): void;
}

class ConcreteSubject implements ISubject {
   private observers: Observer[] = [];
   public state: string = "Light";

   public attach(observer: Observer): void {
      const isExist = this.observers.includes(observer);
      if (isExist) {
         return console.log(`Обсервер вже прикріплений до списку спостерігачів.`);         
      }
      console.log(`Обсервер прикріплено до списку спостерігачів.`);
      this.observers.push(observer);
   }

   public detach(observer: Observer): void {
      const observerIndex = this.observers.indexOf(observer);
      if (observerIndex === -1) {
         return console.log(`Обсервер не прикріплено до списку спостерігачів.`);         
      }
      this.observers.splice(observerIndex, 1);
      console.log(`Обсервер відкріплено зі списку спостерігачів.`);      
   }

   public notify(): void {
      for (const observer of this.observers) {
         observer.update(this);
      }
   }
   /**
    * Вибирає режим перегляду між Light та Darck.
    */
   public stateChange(state: string): void {
      if (state == "Light" || "Darck") {
         if (state == this.state) {
            console.log(`Ви вибрали активний стан.`);            
         } else {
            this.state = state;
            console.log(`Ви зімінили стан на ${state}.`);
            this.notify();
         }
      } else {
         console.log(`Ви вказали неіснуючий стан`);         
      }
   }
}

/**
* Інтерфейс спостерігачів.
*/
interface IObserver {
   /**
   * Отримує оновлення стану суб'єкта.
   */
   update(subject:ISubject): void;
}

class TextColor implements IObserver{
   private textColor: string = "black";
   private mode: string = "Light";

   public changeColor(): void {
      if (this.textColor == "black") {
         this.textColor = "white";         
      } else  if (this.textColor = "white") {
         this.textColor = "black";
      } else {
         console.log("Error!");
         
      }
      console.log(`Колір тексту ${this.textColor}`);
   }

   public update(subject:ISubject): void {
      if (subject instanceof ConcreteSubject && subject.state !== this.mode) {
         this.changeColor();
         this.mode = subject.state;
      } else if(subject instanceof ConcreteSubject && subject.state == this.mode) {
         console.log(`Колір тексту відповідає вибраному режиму та не потребує зміни.Колір тексту ${this.textColor}`);         
      } else {
         console.log(`Error!`);         
      }
   }
}

class Background implements IObserver{
   private beckgroundColor: string = "white";
   private mode: string = "Light";

   public changeColor(): void {
      if (this.beckgroundColor == "black") {
         this.beckgroundColor = "white";         
      } else  if (this.beckgroundColor = "white") {
         this.beckgroundColor = "black";
      } else {
         console.log("Error!");
         
      }
      console.log(`Колір фону ${this.beckgroundColor}`);
   }

   public update(subject:ISubject): void {
      if (subject instanceof ConcreteSubject && subject.state !== this.mode) {
         this.changeColor();
         this.mode = subject.state;
      } else if(subject instanceof ConcreteSubject && subject.state == this.mode) {
         console.log(`Колір фону відповідає вибраному режиму та не потребує зміни.Колір фону ${this.beckgroundColor}`);         
      } else {
         console.log(`Error!`);         
      }
   }
}

const mode = new ConcreteSubject();

const text = new TextColor();
mode.attach(text);
const background = new Background();
mode.attach(background);

console.log("");
mode.stateChange("Light");

console.log("");
mode.stateChange("Dark");

console.log("");
mode.stateChange("Light");
console.log("");
mode.detach(background);
mode.stateChange("Dark");

console.log("");