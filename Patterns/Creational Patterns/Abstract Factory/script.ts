interface CreatorOFAbstractFactory {
   /**
   * Творець м'ячів
   */
   creatorBall(): Ball;
   /**
   * Творець клею
   */
   creatorGlue(): Glue;
}

/**
 * Гумова фабрика
 */
class CreatorRubber implements CreatorOFAbstractFactory {
   creatorBall(): Ball {
      return new RubberBall()
   }
   creatorGlue(): Glue {
      return new RubberGlue()
   }
}
/**
 * Пластикова фабрика
 */
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

class RubberBall implements Ball {
   jump(): string {
      return `пластиковий м'яч, що погано стрибає`
   }
}

class PlasticBall implements Ball {
   jump(): string {
      return `гумовий м'яч, що гарно стрибає`
   }
}

interface Glue {
   introduction(): string;
   toGlue(prodact: Ball): string; 
}

class RubberGlue implements Glue {
   introduction() {
      return `Я клей для гуми`
   }
   toGlue(prodact: Ball): string {
      const ball = prodact.jump();
      return `${this.introduction()}, що клеїть ${ball}`
   } 
}

class PlasticGlue implements Glue {
   introduction() {
      return `Я клей для пластика`
   }
   toGlue(prodact: Ball): string {
      const ball = prodact.jump();
      return `${this.introduction()}, що клеїть ${ball}`
   } 
}

function buyABall(creator:CreatorOFAbstractFactory) {
   const ball = creator.creatorBall();
   const glue = creator.creatorGlue();
   console.log(glue.introduction());
   console.log(glue.toGlue(ball));   
}

buyABall(new CreatorRubber());
buyABall(new CreatorPlastic());