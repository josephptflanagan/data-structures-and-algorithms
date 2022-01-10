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

/* BINARY SEARCH TREES - START */

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

}

let bst = new BST;
console.log(bst.insert(5));
console.log(bst.insert(3));
console.log(bst.insert(7));
console.log(bst.insert(2));
console.log(bst.insert(4));
console.log(bst.insert(8));


/* BINARY SEARCH TREES - END */

/*<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>*/