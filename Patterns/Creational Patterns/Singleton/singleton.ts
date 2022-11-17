class Singleton {
   private static instance: Singleton;
   
   public static getInstance() { //name:string
      if (!Singleton.instance) {
         Singleton.instance = new Singleton()  //new Singleton(name)
      }
      return Singleton.instance;
   }
}

function createInstance() {     
   const user1 = Singleton.getInstance(); 
   const user2 = Singleton.getInstance(); 

   if (user1 === user2) {
      
   console.log(`---!!!---Singleton works, user1 and user2 are the same instance.`); 
   } else {
      console.log(`---!!!---Singleton failed, user1 and user2 are not the same instance.`);
   }     
}

createInstance(); 