var TreeType = (function () {
    function TreeType(sort) {
        this.sort = sort;
    }
    TreeType.prototype.getProperty = function () {
        return this.sort;
    };
    TreeType.prototype.createTree = function (createdForest, x, y, treeType) {
        createdForest.forest[x][y] = treeType.getProperty();
    };
    return TreeType;
}());
var FactoryTypeTree = (function () {
    function FactoryTypeTree(initialFactoryTypeTree) {
        this.typeTrees = {};
        for (var _i = 0, initialFactoryTypeTree_1 = initialFactoryTypeTree; _i < initialFactoryTypeTree_1.length; _i++) {
            var state = initialFactoryTypeTree_1[_i];
            this.typeTrees[state] = new TreeType(state);
        }
    }
    FactoryTypeTree.prototype.getTypeTree = function (sort) {
        var key = sort;
        if (!(key in this.typeTrees)) {
            this.typeTrees[key] = new TreeType(sort);
        }
        return this.typeTrees[key];
    };
    return FactoryTypeTree;
}());
var CreaterForest = (function () {
    function CreaterForest() {
        this.forest = new Array(4);
        var i;
        for (i = 0; i < 4; i++) {
            this.forest[i] = new Array(4);
        }
    }
    return CreaterForest;
}());
var forest = new CreaterForest();
var treeTypes = new FactoryTypeTree(['дуб', 'береза', 'сосна']);
function addTreeInForest(forest, sort, x, y) {
    var treeType = treeTypes.getTypeTree(sort);
    treeType.createTree(forest, x, y, treeType);
}
addTreeInForest(forest, 'дуб', 0, 2);
addTreeInForest(forest, 'береза', 1, 3);
addTreeInForest(forest, 'сосна', 2, 3);
addTreeInForest(forest, 'вільха', 1, 1);
console.log(forest);
//# sourceMappingURL=flywaight.js.map