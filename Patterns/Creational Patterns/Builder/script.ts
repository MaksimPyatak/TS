/**
 * Клас Creator оголошує фабричний метод, який має повертати об’єкт класу Product. Підкласи Creator зазвичай забезпечують реалізацію цього методу.
 */
 abstract class Creator {
   /**
   Зауважте, що Творець також може надати деяку реалізацію фабричного методу за замовчуванням.
    */
   public abstract factoryMethod(): Product;

   /**
    Також зауважте, що, незважаючи на назву, основним обов’язком Творця є не створення продуктів. Зазвичай він містить певну основну бізнес-логіку, яка спирається на об’єкти Product, повернуті фабричним методом. Підкласи можуть опосередковано змінювати цю бізнес-логіку, перекриваючи фабричний метод і повертаючи з нього інший тип продукту.
    */
   public someOperation(): string {
       // Викличте фабричний метод, щоб створити об’єкт Product.
       const product = this.factoryMethod();
       // Now, use the product.
       return `Creator: The same creator's code has just worked with ${product.operation()}`;
   }
}

/**
* конкретні Творці замінюють заводський метод, щоб змінити тип отриманого продукту.
*/
class ConcreteCreator1 extends Creator {
   /**
    * Зауважте, що в сигнатурі методу все ще використовується абстрактний тип продукту, навіть якщо конкретний продукт фактично повертається з методу. Таким чином Творець може залишатися незалежним від конкретних класів продуктів.
    */
   public factoryMethod(): Product {
       return new ConcreteProduct1();
   }
}

class ConcreteCreator2 extends Creator {
   public factoryMethod(): Product {
       return new ConcreteProduct2();
   }
}

/**
* Інтерфейс продукту оголошує операції, які мають реалізовувати всі конкретні продукти.
*/
interface Product {
   operation(): string;
}

/**
* Конкретні продукти пропонують різні реалізації інтерфейсу продукту.
*/
class ConcreteProduct1 implements Product {
   public operation(): string {
       return '{Result of the ConcreteProduct1}';
   }
}

class ConcreteProduct2 implements Product {
   public operation(): string {
       return '{Result of the ConcreteProduct2}';
   }
}

/**
* Клієнтський код працює з екземпляром конкретного творця, хоча й через його базовий інтерфейс. Поки клієнт продовжує працювати з творцем через базовий інтерфейс, ви можете передати йому будь-який підклас творця.
*/
function clientCode1(creator: Creator) {
   // ...
   console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
   console.log(creator.someOperation());
   // ...
}

/**
* Програма вибирає тип творця залежно від конфігурації чи середовища.
*/
console.log('App: Launched with the ConcreteCreator1.');
clientCode1(new ConcreteCreator1());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode1(new ConcreteCreator2());

/*
Output.txt: Результат виконання
App: Launched with the ConcreteCreator1.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ConcreteProduct1}

App: Launched with the ConcreteCreator2.
Client: I'm not aware of the creator's class, but it still works.
Creator: The same creator's code has just worked with {Result of the ConcreteProduct2}
*/