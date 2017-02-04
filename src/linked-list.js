const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;

    }

    append(data) {
        var node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;

    }

    head() {
        return this._head.data;

    }

    tail() {
        return this._tail.data;

    }

    at(index) {
        var currentNode = this._head,
            count = 0;

        while (count < index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode.data;

    }

    insertAt(index, data) {
        var currentNode = this._head,
            newNode = new Node(data),
            count = 0;

        if (index < 1 || index > this.length + 1) {
            return null;
        }

        if (this.length === 0) {
            this._head = newNode;
            this._tail = newNode;

        } else if (index === 1) {
            newNode.next = this._head;
            this._head.prev = newNode;
            this._head = newNode;

        } else if (index === this.length + 1) {
            newNode.prev = this._tail;
            this._tail.next = newNode;
            this._tail = newNode;

        } else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }

            newNode.prev = currentNode.prev;
            newNode.next = currentNode;
            currentNode.prev = newNode;

            this.length++;

        }

        return this;

    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }

    }

    clear() {
        this._head.data = null;
        this._tail.data = null;
        this.length = 0;
        return this;

    }

    deleteAt(index) {
        var currentNode = this._head,
            count = 0,
            beforeNodeToDelete = null,
            afterNodeToDelete = null;

        if (this.length == 0 || index < 1 || index > this.length) {
            return null;
        }

        if (index == 1) {
            this._head = currentNode.next;

        } else if (index == this.length) {
            this._tail = this._tail.prev;
            this._tail.next = null;

        } else {
            while (count < index) {
                currentNode = currentNode.next;
                count++;
            }

            beforeNodeToDelete = currentNode.prev;
            afterNodeToDelete = currentNode.next;

            beforeNodeToDelete.next = afterNodeToDelete;
            afterNodeToDelete.prev = beforeNodeToDelete;
        }
        this.length--;

    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;
