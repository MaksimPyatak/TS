interface IMediator {
   notify(event: string): void;
}

class ConcretMediator implements IMediator {
   private sendButtom: SendButton;
   private sendKey: SendKey;
   private sendingForm: SendingForm;

   constructor (sB: SendButton, sK: SendKey, sF: SendingForm) {
      this.sendButtom = sB;
      this.sendButtom.setMediator(this);
      this.sendKey = sK;
      this.sendKey.setMediator(this);
      this.sendingForm = sF;
      this.sendingForm.setMediator(this);
   }

   notify(event: string): void {
      if (event === "Send" || "Enter") {
         this.sendingForm.sending();
      }
   }
}

class BaseComponent {
   protected mediator: IMediator;

   constructor (mediator?: IMediator) {
      this.mediator = mediator;
   }

   public setMediator(mediator: IMediator): void {
      this.mediator = mediator;
   }
}

class SendButton extends BaseComponent {
   public send(): void {
      console.log('Ви натиснули кнопку Send. Повинна відправитися форма.');
      this.mediator.notify("Send");
   }   
}

class SendKey extends BaseComponent {
   public send(): void {
      console.log('Ви натиснули клавішу Enter. Повинна відправитися форма.');
      this.mediator.notify("Enter");
   }   
}

class SendingForm extends BaseComponent {
   public sending(): void {
      console.log("Заповнена форма відправилась.");      
   }
}

const sendButtom = new SendButton();
const sendKey = new SendKey();
const sendingForm = new SendingForm();
const mediator = new ConcretMediator(sendButtom, sendKey, sendingForm);

console.log('');
sendKey.send();
console.log('');
sendButtom.send();
console.log('');
