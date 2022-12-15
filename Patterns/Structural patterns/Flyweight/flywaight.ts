/**
* TreeType створює тип дерева з неповторними властивостямию та методом, що розміщує його в конкретному місці в масиві
*/
class TreeType {
   private sort: string;
   constructor(sort: string) {
      this.sort = sort;
   }
   /**
   * getProperty надає доступ до властивостей класу
   */
   public getProperty(): string {
      return this.sort;
   }
   /**
   * createTree створює нове дерево з конкретним місцем в масиві
   */
   public createTree(createdForest: CreaterForest, x: number, y: number, treeType: TreeType): void {
      createdForest.forest[x][y] = treeType.getProperty();
   } 
}

/**
* FactoryTypeTree створює масив неповторюваних типів дерев
*/
class FactoryTypeTree {
   private typeTrees:{[key: string]: TreeType} = <any>{};
   
   constructor(initialFactoryTypeTree: string[]) {
      for (const state of initialFactoryTypeTree) {
          this.typeTrees[state] = new TreeType(state);         
      }
   }

   public getTypeTree(sort: string): TreeType {
      const key = sort;
    
     if (!(key in this.typeTrees)) {
      this.typeTrees[key] = new TreeType(sort);
     }
     return this.typeTrees[key];
   }
}

/**
* CreaterForest створює масив в якому розміщуються дерева
*/
class CreaterForest  {
   public forest: any[][];
   constructor () {
      this.forest = new Array(4);
      let i: number;
      for ( i = 0; i < 4; i++) {
         this.forest[i] = new Array(4);         
       }
   }
}

let forest = new CreaterForest();
let treeTypes = new FactoryTypeTree(['дуб', 'береза', 'сосна']);

function addTreeInForest( forest: CreaterForest, sort: string, x: number, y: number) {
   let treeType = treeTypes.getTypeTree(sort);
   treeType.createTree(forest, x, y, treeType);
}


addTreeInForest(forest, 'дуб', 0, 2);
addTreeInForest(forest, 'береза', 1, 3);
addTreeInForest(forest, 'сосна', 2, 3);
addTreeInForest(forest, 'вільха', 1, 1);
console.log(forest);
