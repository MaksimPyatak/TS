interface CreatorOFAbstractFactory {
   creatorBall(): Ball;
   creatorGlue(): Glue;
}


class CreatorRubber implements CreatorOFAbstractFactory {
   creatorBall(): Ball {
      return new RubberBall()
   }
   creatorGlue(): Glue {
      return new RubberGlue()
   }
}

class CreatorPlastic implements CreatorOFAbstractFactory {
   creatorBall(): Ball {
      return new PlasticBall()
   };
   creatorGlue(): Glue {
      return new PlasticGlue()
   };
}

interface Ball {
   jump(): string;
}

class RubberBall {
   jump(): string {
      return `пластиковий м'яч, що погано стрибає`
   }
}

class PlasticBall {
   jump(): string {
      return `гумовий м'яч, що гарно стрибає`
   }
}

interface Glue {
   introduction(): string;
   toGlue(prodact: Ball): string; 
}

class RubberGlue {
   introduction() {
      return `Я клей для гуми`
   }
   toGlue(prodact: Ball): string {
      const ball = prodact.jump();
      return `${this.introduction()}, що клеїть ${ball}`
   } 
}

class PlasticGlue {
   introduction() {
      return `Я клей для пластика`
   }
   toGlue(prodact: Ball): string {
      const ball = prodact.jump();
      return `${this.introduction()}, що клеїть ${ball}`
   } 
}

function bayABall(creator:CreatorOFAbstractFactory) {
   const ball = creator.creatorBall();
   const glue = creator.creatorGlue();
   console.log(glue.introduction());
   console.log(glue.toGlue(ball));   
}

bayABall(new CreatorRubber());
bayABall(new CreatorPlastic());