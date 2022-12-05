interface IServiceInterface {
   operation(status: string): void;
}

class Service implements IServiceInterface {
   public operation(status: string): void {
      console.log(`"${status}" welcom to the Servise.`);      
   }
}

class ProxyService implements IServiceInterface {
   private realService: Service;

   //constructor (realService: Service) {
   //   this.realService = realService;
   //}
   operation(status: string): void {
      if (status == "admin") {
         this.realService = new Service;
         this.realService.operation(status);
      } else {
         console.log(`"${status}" access is denied`);         
      }   
   }
} 

let proxyServise = new ProxyService();
proxyServise.operation("admin");
proxyServise.operation("user");