var TreeType = (function () {
    function TreeType(sort) {
        this.sort = sort;
    }
    TreeType.prototype.getProperty = function () {
        return this.sort;
    };
    TreeType.prototype.createTree = function (createdForest, x, y, treeType) {
        createdForest.forest[x][y] = treeType;
    };
    TreeType.prototype.getTreeTypeInfo = function (x, y) {
        console.log("\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0434\u0435\u0440\u0435\u0432\u043E ".concat(this.sort, " \u0437 \u043A\u043E\u043E\u0440\u0434\u0438\u043D\u0430\u0442\u0430\u043C\u0438 ").concat(x, " ").concat(y));
    };
    return TreeType;
}());
var FactoryTypeTree = (function () {
    function FactoryTypeTree(initialFactoryTypeTree) {
        for (var _i = 0, initialFactoryTypeTree_1 = initialFactoryTypeTree; _i < initialFactoryTypeTree_1.length; _i++) {
            var state = initialFactoryTypeTree_1[_i];
            var i = 0;
            FactoryTypeTree.typeTrees[i] = new TreeType(state);
            i++;
        }
    }
    FactoryTypeTree.prototype.getTypeTree = function (sort) {
        var treeType = FactoryTypeTree.typeTrees.find(function (value) {
            return value.getProperty() == sort;
        });
        if (treeType == undefined) {
            treeType = new TreeType(sort);
            FactoryTypeTree.typeTrees.push(treeType);
        }
        return treeType;
    };
    FactoryTypeTree.typeTrees = {};
    return FactoryTypeTree;
}());
var Tree = (function () {
    function Tree(x, y, treeType) {
        this.x = x;
        this.y = y;
        this.treeType = treeType;
    }
    return Tree;
}());
var CreaterForest = (function () {
    function CreaterForest() {
        this.forest = new Array(4);
        var i;
        for (i = 0; i < 4; i++) {
            this.forest[i] = new Array(4);
        }
    }
    CreaterForest.prototype.sendSkinInfo = function () {
        for (var _i = 0, _a = this.forest; _i < _a.length; _i++) {
            var tree = _a[_i];
        }
    };
    return CreaterForest;
}());
var forest = new CreaterForest();
var treeTypes = new FactoryTypeTree(['дуб', 'береза', 'сосна']);
function addTreeInForest(forest, sort, x, y) {
    var treeType = treeTypes.getTypeTree(sort);
    treeType.createTree(forest, x, y, treeType);
}
function test(forest) {
    var array = forest.forest;
    for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
        var row = array_1[_i];
        for (var _a = 0, row_1 = row; _a < row_1.length; _a++) {
            var tree = row_1[_a];
            console.log(tree);
        }
    }
}
addTreeInForest(forest, 'дуб', 1, 2);
addTreeInForest(forest, 'береза', 1, 3);
addTreeInForest(forest, 'сосна', 2, 3);
addTreeInForest(forest, 'вільха', 1, 3);
console.log(forest);
test(forest);
//# sourceMappingURL=flywaight.js.map