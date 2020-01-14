export class Queue {
    private stack: any[];

    constructor() {
        this.stack = [];
    }

    enqueue(value: any) {
        return this.stack.push(value);
    }

    dequeue() {
        if (this.stack.length !== 0) {
            return this.stack.pop();
        } else {
            return null
        }
    }

    showQueue() {
        return this.stack;
    }

}

