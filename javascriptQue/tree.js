class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;   // Left child link
        this.right = null;  // Right child link
    }
}


// Nodes create karte hain
let root = new TreeNode(10);
let child1 = new TreeNode(5);
let child2 = new TreeNode(15);


root.left = child1; 
root.right = child2;  

// console.log(child1);

child1.left = new TreeNode(2); // 5 ke left me 2 jud gaya!

console.log(root);

console.log([] == []);
