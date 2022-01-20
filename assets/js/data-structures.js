let answerExplainationEl = document.querySelector('#explaination')
let answerListEl = document.querySelector('#answerList');

/* ES2015 Class Syntax

class Student {
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName(){
        return `Your full name is ${this.firstName} ${this.lastName}`;
    }
    markLate(){
        this.tardies++;
        if(this.tardies >=3){
            return `${this.firstName} ${this.lastName} has been late ${this.tardies} times, and is expelled`;
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;      
    }
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){ //instance method
        let sum = this.scores.reduce(function(a,b){return a+b;})
        return sum/this.scores.length;
    }
}

let studentOne = new Student("Carl", "Weathers");
let studentTwo = new Student("Tobias", "Fuenke");

console.log(studentOne.fullName());
console.log(studentOne.markLate());
console.log(studentOne.addScore(87));
console.log(studentOne.addScore(89));
console.log(studentOne.calculateAverage());

class Point {
    constructor(x,y) {
        this.x = x;
        this.y = y;
    }
    static distance (a,b){ //class method
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

console.log(Point.distance(p1,p2));

/* ES2015 Class Syntax */



/* SINGLY LINKED LIST - START

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { //add a new node to the end, return the list
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    pop() { //remove the last node, return the node
        if (!this.head) return undefined;

        let current = this.head;
        let newTail = current;

        while (current.next) {
            newTail = current;
            current = current.next;
        }

        this.tail = newTail;
        this.tail.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return current;
    }
    shift() { //remove the first node, return the node
        if (!this.head) return undefined;

        let currentHead = this.head;
        this.head = currentHead.next;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return currentHead;
    }
    unshift(val) { //add a node to the front of the list, return the list
        let newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head = newHead;
        }
        this.length++;

        return this;
    }
    get(idx) { //get the node at the specified index and return it
        if (idx < 0 || idx >= this.length) return null;

        let current = this.head;
        let counter = 0;

        while (idx != counter) {
            current = current.next
            counter++;
        }
        return current;
    }
    set(idx, val) { //set the node at the specified index to a specified value

        let current = this.get(idx)

        if (current) {
            current.val = val;
            return true;
        }

        return false;
    }
    insert(idx, val) { //add a node at the specified index, return true if successful, false if unsuccessful

        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx = this.length) {
            return !!this.push(val); //altered to make the returns a boolean rather than returning the list, bringing it in line with the other results
        } else if (idx === 0) {
            return !!this.unshift(val); //altered to make the returns a boolean rather than returning the list, bringing it in line with the other results
        } else {
            let newNode = new Node(val);
            let previousNode = this.get(idx - 1);
            let temp = previousNode.next;
            previousNode.next = newNode;
            newNode.next = temp
            this.length++;
            return true;
        }


    }
    remove(idx) { //remove the node at the specified index, return true if successful, false if unsuccessful

        if (idx < 0 || idx >= this.length) {
            return false;
        } else if (idx === 0) {
            return !!this.shift();
        } else if (idx === this.length - 1) {
            return !!this.pop();
        } else {
            let previousNode = this.get(idx - 1);
            let removedNode = previousNode.next;
            previousNode.next = removedNode.next;
            this.length--;
            return true;
        }

    }
    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }

        return this;

    }

    // Big O
    // Insertion O(1)
    // Removal O(1) to O(N)
    // Searching O(N)
    // Accessing O(N)

}

let list = new SinglyLinkedList()

/* SINGLY LINKED LIST - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* DOUBLY LINKED LIST - START 

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) { //add a new node to the end, return the list
        let newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail
            this.tail = newNode;
        }
        this.length++;

        return this;
    }
    pop() { //remove the last node, return the node
        if (!this.head) return undefined;

        let lastNode = this.tail;

        this.tail = lastNode.prev;
        this.tail.next = null;
        lastNode.prev = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return lastNode;
    }
    shift() { //remove the first node, return the node
        if (!this.head) return undefined;

        let firstNode = this.head;

        this.head = firstNode.next;
        this.head.prev = null;
        firstNode.next = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }

        return firstNode;
    }
    unshift(val) { //add a node to the front of the list, return the list
        let newHead = new Node(val);

        if (!this.head) {
            this.head = newHead;
            this.tail = newHead;
        } else {
            newHead.next = this.head;
            this.head.prev = newHead
            this.head = newHead;
        }
        this.length++;

        return this;
    }
    get(idx) { //get the node at the specified index and return it
        if (idx < 0 || idx >= this.length) return null;

        let counter, current;

        if (idx >= this.length / 2) {
            current = this.tail;
            counter = this.length - 1;

            while (idx != counter) {
                current = current.prev;
                counter--;
            }

        } else {
            current = this.head;
            counter = 0;

            while (idx != counter) {
                current = current.next;
                counter++;
            }
        }


        return current;
    }
    set(idx, val) { //set the node at the specified index to a specified value

        let current = this.get(idx)

        if (current) {
            current.val = val;
            return true;
        }

        return false;
    }
    insert(idx, val) { //add a node at the specified index, return true if successful, false if unsuccessful

        if (idx < 0 || idx > this.length) {
            return false;
        } else if (idx = this.length) {
            return !!this.push(val); //altered to make the returns a boolean rather than returning the list, bringing it in line with the other results
        } else if (idx === 0) {
            return !!this.unshift(val); //altered to make the returns a boolean rather than returning the list, bringing it in line with the other results
        } else {
            let newNode = new Node(val);
            let postNode = this.get(idx);
            let prevNode = postNode.prev;
            prevNode.next = newNode;
            postNode.prev = newNode;
            newNode.next = postNode;
            newNode.prev = prevNode;
            this.length++;
            return true;
        }


    }
    remove(idx) { //remove the node at the specified index, return true if successful, false if unsuccessful

        if (idx < 0 || idx >= this.length) {
            return false;
        } else if (idx === 0) {
            return !!this.shift();
        } else if (idx === this.length - 1) {
            return !!this.pop();
        } else {
            let removedNode = this.get(idx);
            let prevNode = removedNode.prev;
            let postNode = removedNode.next;
            postNode.prev = prevNode;
            prevNode.next = postNode;
            removedNode.prev = null;
            removedNode.next = null;
            this.length--;

            return removedNode;
        }

    }
    reverse() {

        let node = this.head;
        this.head = this.tail;
        this.tail = node;

        let next;
        let prev = null;

        for (let i = 0; i < this.length; i++) {
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }

        return this;

    }

    // Big O
    // Insertion O(1)
    // Removal O(1)
    // Searching O(N)
    // Accessing O(N)

}

/* DOUBLY LINKED LIST - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* STACK - END  // LIFO

// Arrays can be utilized to make a stack, with shift and unshift OR push and pop, always must follow the LIFO principle to be a stack

// Linked Lists can also be used, with the same methods, specifically using shift and unshift for singly linked lists

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    push(val){
        let newNode = new Node(val);

        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    pop(){
        if(!this.first) return null;

        let temp = this.first;
        if (this.first == this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.value;
    }
}

    // Big O
    // Insertion O(1)
    // Removal O(1)
    // Searching O(N)
    // Accessing O(N)

let stack = new Stack;
console.log(stack.push('32'));
console.log(stack.push('322'));
console.log(stack.push('232'));
console.log(stack.push('132'));
console.log(stack.push('632'));
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


/* STACK - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* QUEUE - END  // FIFO

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Queue {
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    enqueue(val){
        let newNode = new Node(val);

        if (!this.first){
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.last;
            this.last = newNode;
            temp.next = this.last;
        }
        return ++this.size;
    }
    dequeue(){
        if(!this.first) return null;

        let temp = this.first;
        if (this.first == this.last){
            this.last = null
        }
        this.first = this.first.next
        this.size--;
        return temp.value;
    }
}

    // Big O
    // Insertion O(1)
    // Removal O(1)
    // Searching O(N)
    // Accessing O(N)

let queue = new Queue;
console.log("queue.size ",queue.size);
console.log(queue.enqueue('32'));
console.log(queue.enqueue('322'));
console.log(queue.enqueue('232'));
console.log(queue.enqueue('132'));
console.log(queue.enqueue('632'));
console.log("queue.size ",queue.size);
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log("queue.size ",queue.size);

/* QUEUE - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY SEARCH TREES - START 

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    insert(val) {

        let newNode = new Node(val);
        let tempNode = this.root;


        if (!this.root) {
            this.root = newNode;
            return this;
        }

        while (true) {

            if (newNode.value === tempNode.value) {

                return undefined;

            } else if (newNode.value < tempNode.value) {
                if (tempNode.left) {
                    tempNode = tempNode.left;
                }
                else {
                    tempNode.left = newNode;
                    return this;
                }
            } else if (newNode.value > tempNode.value) {
                if (tempNode.right) {
                    tempNode = tempNode.right;
                }
                else {
                    tempNode.right = newNode;
                    return this;
                }
            }

        }

    }
    find(val) { //returns the node, if not present, returns null

        let tempNode = this.root;

        if (!tempNode) {

            return null;

        } else {

            while (true) {

                if (val === tempNode.value) {
                    return tempNode;

                } else if (val < tempNode.value) {

                    if (tempNode.left) {
                        tempNode = tempNode.left;

                    } else {
                        return null;

                    }

                } else if (val > tempNode.value) {
                    if (tempNode.right) {
                        tempNode = tempNode.right;

                    }
                    else {
                        return null;
                    }
                }

            }
        }


    }
    contains(val) { //returns true if the node exists, false otherwise

        let tempNode = this.root;

        if (!tempNode) {

            return false;

        } else {

            while (true) {

                if (val === tempNode.value) {
                    return true;

                } else if (val < tempNode.value) {

                    if (tempNode.left) {
                        tempNode = tempNode.left;

                    } else {
                        return false;

                    }

                } else if (val > tempNode.value) {
                    if (tempNode.right) {
                        tempNode = tempNode.right;

                    }
                    else {
                        return false;
                    }
                }

            }
        }


    }
    bfs() { //breadth first search

        let queue = [];
        let contents = [];

        if (!this.root){
            return null;
        }

        queue.push(this.root);

        while (queue.length > 0){
            if (queue[0].left){
                queue.push(queue[0].left)
            }
            if (queue[0].right){
                queue.push(queue[0].right)
            }
            contents.push(queue.shift())
        }

        return contents;

    }
    dfsPreOrder(){ //depth first search - pre order

        let data = [];

        function traverse (node){

            data.push(node.value);

            if (node.left){return traverse(node.left)};
            if (node.right){return traverse(node.right)};

        }

        traverse(this.root);

        return data;

    }
    dfsPostOrder(){ //depth first search - post order

        let data = [];

        function traverse (node){

            if (node.left){return traverse(node.left)};
            if (node.right){return traverse(node.right)};

            data.push(node.value);    

        }

        traverse(this.root);

        return data;

    }
    dfsInOrder(){ //depth first search - in order

        let data = [];

        function traverse (node){

            if (node.left){return traverse(node.left)};
            data.push(node.value);
            if (node.right){return traverse(node.right)};
            

        }

        traverse(this.root);

        return data;

    }
}

let bst = new BST;
console.log(bst.insert(5));
console.log(bst.insert(3));
console.log(bst.insert(7));
console.log(bst.insert(2));
console.log(bst.insert(4));
console.log(bst.insert(8));

console.log(bst.bfs());


/* BINARY SEARCH TREES - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* BINARY HEAPS - START 

class MaxBinaryHeap {
    constructor() {
        this.values = [];
    }
    insert(val) {

        this.values.push(val);

        if (this.values.length === 1) {
            return this.values;
        }

        let placed = false;
        let insertIndex = this.values.length - 1;

        while (!placed) {

            let parentIndex = Math.floor((insertIndex - 1) / 2);

            if (insertIndex === 0 || this.values[insertIndex] < this.values[parentIndex]) {

                placed = true

            } else {

                let temp = this.values[parentIndex];
                this.values[parentIndex] = this.values[insertIndex];
                this.values[insertIndex] = temp;
                insertIndex = parentIndex;

            }
        }

        return this.values;

    }
    extractMax() {

        if (this.values.length === 0) {
            return undefined;
        }

        let max = this.values[0]

        let last = this.values.pop();

        let length = this.values.length;

        if (length > 0) {

            let idx = 0;
            this.values[idx] = last;

            while (true) {

                let leftChildIdx = (2 * idx + 1)
                let rightChildIdx = (2 * idx + 2)
                let leftChild, rightChild;

                let swap = null;

                if (leftChildIdx < length) {
                    leftChild = this.values[leftChildIdx];
                    if (leftChild > last) {
                        swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.values[rightChildIdx];
                    if ((swap == null && rightChild > last) || (rightChild > leftChild && swap !== null)) {
                        swap = rightChildIdx;
                    }
                }

                if (swap === null) break;

                this.values[idx] = this.values[swap];
                this.values[swap] = last;
                idx = swap;
            }

        }
        return max;
    }
}

// let heap = new MaxBinaryHeap;
// heap.insert(12);
// heap.insert(11);
// heap.insert(56);
// heap.insert(13);
// heap.insert(87);
// heap.insert(25);
// heap.insert(110);
// console.log('heap: ', heap);
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log(heap.extractMax());
// console.log('heap: ', heap);

class HeapNode {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.queue = [];
    }
    enqueue(val, priority) {

        let newNode = new HeapNode(val, priority);
        this.queue.push(newNode);
        let idx = this.queue.length - 1;
        const element = this.queue[idx];

        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.queue[parentIdx];
            if (element.priority >= parent.priority) break;
            this.queue[parentIdx] = element;
            this.queue[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue() {

        const min = this.queue[0];
        const end = this.queue.pop();

        if (this.queue.length > 0) {

            this.queue[0] = end;
            let idx = 0;
            const length = this.queue.length;
            const element = this.queue[0];

            while (true) {

                let leftChildIdx = 2 * idx + 1;
                let rightChildIdx = 2 * idx + 2;
                let leftChild, rightChild;
                let swap = null;

                if (leftChildIdx < length) {
                    leftChild = this.queue[leftChildIdx];
                    if (leftChild.priority < element.priority) {
                        swap = leftChildIdx;
                    }
                }
                if (rightChildIdx < length) {
                    rightChild = this.queue[rightChildIdx];
                    if (
                        (swap === null && rightChild.priority < element.priority) ||
                        (swap !== null && rightChild.priority < leftChild.priority)
                    ) {
                        swap = rightChildIdx;
                    }
                }
                if (swap === null) break;

                this.queue[idx] = this.queue[swap];
                this.queue[swap] = element;
                idx = swap;

            }
        }

        return min;

    }
}

let priority = new PriorityQueue;
priority.enqueue("first entered", 5);
priority.enqueue("second entered", 1);
priority.enqueue("third entered", 2);
priority.enqueue("fourth entered", 4);
priority.enqueue("fifth entered", 3);
console.log("priority: ", priority);

/* BINARY HEAPS - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* HASH TABLES - START 

class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }
    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }
    set(key, value) {
        let index = this._hash(key);
        if (!this.keyMap[index]) {
            this.keyMap[index] = [];
        }
        this.keyMap[index].push([key, value]);
    }
    get(key) {
        let index = this._hash(key);
        if (this.keyMap[index]) {
            for (let i = 0; i < this.keyMap[index].length; i++) {
                if (this.keyMap[index][i][0] === key) {
                    return this.keyMap[index][i][1]
                }
            }
        }
        return undefined;
    }
    values() {
        
        let valuesArray = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArray.includes(this.keyMap[i][j][1])) {
                        valuesArray.push(this.keyMap[i][j][1]);
                    }
                }
            }

        }
        return valuesArray;
    }
    keys() {

        let keysArray = [];

        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (! keysArray.includes(this.keyMap[i][j][0])) {
                        keysArray.push(this.keyMap[i][j][0]);
                    }
                }
            }

        }
        return keysArray;
    }
}

let ht = new HashTable(17);
ht.set("maroon", "#800000")
ht.set("yellow", "#FFFF00")
ht.set("olive", "#808000")
ht.set("salmon", "#FA8072")
ht.set("lightcoral", "#F08080")
ht.set("mediumvioletred", "#C71585")
ht.set("plum", "#DDA0DD")
console.log(ht.values());

console.log(ht.keys());
/* HASH TABLES - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/

/* GRAPHS - START */

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1, vertex2) {
        if (this.adjacencyList[vertex1] && this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex1].push(vertex2);
            this.adjacencyList[vertex2].push(vertex1);
        }
    }
    removeEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)
    }
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length > 0) {
            let adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
    DFSRecursive(start) {

        let result = [];
        let visited = {};
        let adjacencyList = this.adjacencyList;

        let dfs = function (vertex) {

            if (!vertex) {
                return null;
            }

            result.push(vertex);
            visited[vertex] = true;
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    dfs(neighbor)
                }
            })

        }

        dfs(start);

        return result;

    }
    DFSIterative(start) {
        let result = [];
        let visited = {};
        let stack = [start];
        while (stack.length > 0){

            let vertex = stack.pop();

            if(!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(neighbor =>{
                    if (!visited[neighbor]) {
                        stack.push(neighbor)
                    }
                })
            }
        }

        return result;
    }
    BFS(start){
        let queue = [start];
        let visited = {};
        let result = [];

        while (queue.length > 0){

            let vertex = queue.pop();

            if(!visited[vertex]){
                visited[vertex] = true;
                result.push(vertex);
                this.adjacencyList[vertex].forEach(neighbor =>{
                    if (!visited[neighbor]) {
                        queue.unshift(neighbor)
                    }
                })
            }

        }

        return result;

    }
}

let g = new Graph()

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g.DFSRecursive("A"));
console.log(g.DFSIterative("A"));
console.log(g.BFS("A"));

/* GRAPHS - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/