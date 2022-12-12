interface IIterator<Type> {
   current(): Type;
   next(): Type;
   valid(): boolean;
   resetPosition(): void;
}

interface IAggregator {
   getIterator(): IIterator<string>;
}

class HigherEducation implements IIterator<string> {
   private collection: TitlesList;
   private position: number = 0;

   constructor(collection: TitlesList, ) {
      this.collection = collection;
   }

   public current(): string {
      return this.collection.getItems()[this.position];
   }
   public next(): string {
      const item = this.collection.getItems()[this.position];
      ++ this.position ;      
      return item;
   }
   
   public valid(): boolean {
      return this.position < this.collection.getCount();
   }

   public resetPosition(): void {
      this.position = 0;
   }
}

class TitlesList implements IAggregator {
   private items: string[] = [];

   public getItems(): string[] {
      return this.items;
   }

   public getCount(): number {
      return this.items.length;
   }

   public addItem(item: string): void {
      this.items.push(item);
   }

   public getIterator(): IIterator<string> {
      return new HigherEducation(this);
   }   
}

const institutions = new TitlesList();
institutions.addItem('Націонадьний авіаційний університет');
institutions.addItem('Національна академія внутрішніх справ України');
institutions.addItem('Націонадьний медичний університет');
institutions.addItem('Національна академія образотворчого мистецтва і архітектури');
institutions.addItem('Військовий інститут телекомунікацій та інформатизації імені Героїв Крут');

const researchInstitution = institutions.getIterator();
const institute = 'інститут'
const university = 'університет';
const academy = 'академія';

console.log("");

function research(filter:string) {
   while (researchInstitution.valid()) {
      const element = researchInstitution.next();
         const items = element.split(' ');
         for (const item of items) {
            if (item == filter) {
               console.log(element);
            }
         }
   }   
   researchInstitution.resetPosition();
}

research(institute);
console.log("");
research(university);
console.log("");
research(academy);
console.log("");