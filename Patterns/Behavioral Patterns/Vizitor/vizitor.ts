/**
 * IText - загальний інтерфейс компонентів, над якими виконують операції відвідувачі.
 */
interface IText {
   accept(visitor: IVisitor): void;
}

class Paragraph implements IText {
   public accept(visitor: IVisitor): void {
      visitor.visitParagraph(this);
   }

   public getText(): string {
      return 'Text For Example';
   }
}

class List implements IText {
   public accept(visitor: IVisitor): void {
      visitor.visitList(this);
   }

   public getList(): string[] {
      return ['Text', 'For', 'Example', 'With', 'The', 'List'];
   }
}

interface IVisitor {
   visitParagraph(element: Paragraph):void;
   visitList(element: List): void;
}

class ToUpperCase implements IVisitor {
   visitParagraph(element: Paragraph): void {
      const text = element.getText().toUpperCase();
      console.log(text);
   }
   
   visitList(element: List): void {
      const list = element.getList();
      let text = "";
      for (const i of list) {
         text = text + i +" ";
      }
      console.log(text.toUpperCase());
   }
}

class ToLowerCase implements IVisitor {
   visitParagraph(element: Paragraph): void {
      const text = element.getText().toLowerCase();
      console.log(text);
   }
   
   visitList(element: List): void {
      const list = element.getList();
      let text = "";
      for (const i of list) {
         text = text + i +" ";
      }
      console.log(text.toLowerCase());
   }
}

function codeOfClient(components: IText[], visitor: IVisitor) {
   for (const component of components) {
       component.accept(visitor);
   }
}

const components = [new List(), new Paragraph];
const visitorUpper = new ToUpperCase();
const visitLower = new ToLowerCase();

codeOfClient(components, visitorUpper);
console.log('');

codeOfClient(components, visitLower);