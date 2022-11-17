//class Singleton {
//   private static instance: Singleton;
   
//   //protected name:string;

//   //private constructor(name:string) {
//   //   this.name = name;
//   //   console.log(`Application from the user ${name}`);
      
//   //}

//   public static getInstance() { //name:string
//      if (!Singleton.instance) {
//         Singleton.instance = new Singleton()  //new Singleton(name)
//      }
//      return Singleton.instance;
//   }
//}

////interface Users{  !!!Чому не працює  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces
////   name1: string;
////   name2: string;
////}
////let x: number = 1;
////function createInstance(users: Users) {  //!!!Чому не працює
//function createInstance() {     //name1: string, name2: string
//   const user1 = Singleton.getInstance(); //name1
//   const user2 = Singleton.getInstance(); //name2

//   if (user1 === user2) {
      
//   console.log(`---!!!---Singleton works, user1 and user2 are the same instance.`); //${name1}
//   } else {
//      console.log(`---!!!---Singleton failed, user1 and user2 are not the same instance.`);
//   }
//   //console.log(user2);
   
//}
//createInstance(); //'Orest', 'Nazar'