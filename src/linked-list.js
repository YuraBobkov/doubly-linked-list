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
        if (index >= this.length || index < 0){
            return null;
        }

        var currentNode = this._head;
        for (var i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        var node = new Node(data);
        var nodePrev = currentNode.prev;

        node.prev = nodePrev;
        node.next = currentNode;
        currentNode.prev = node;

        if (nodePrev != null){
            nodePrev.next = node;
        }
        this.length++;
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

    reverse() {
        var left = this._head;
        var right = this._tail;

        for (var i = 0; i < Math.floor(this.length / 2); i++) {
            var data = left.data;
            left.data = right.data;
            right.data = data;

            left = left.next;
            right = right.prev;
        }
        return this;
    }

    indexOf(data) {
        var currentNode = this._head,
            count = 0;

        if (this.length === 0) {
            return null;
        }else {

            while (count <= this.length && currentNode.data != data) {
                if (!currentNode.next){
                    return -1;
                }else {
                    currentNode = currentNode.next;
                    count++;
                }
            }
        }
        return count;

    }
}

module.exports = LinkedList;
