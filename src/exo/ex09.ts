export class Queue {
    private stack: number[];
    private minimumStack: number[];
    private minTop: number;
    private top: number;

    constructor() {
        this.stack = [];
        this.minimumStack = [];
        this.top = -1;
        this.minTop = -1;
    }

    push(value: any) {
        //  Math.min(...this.stack)
        return this.stack.push(value);
    }

    pop() {
        if (this.stack.length !== 0) {
            return this.stack.shift();
        } else {
            return null;
        }
    }

    enqueue(value: any) {
        return this.stack.push(value);
    }

    dequeue() {
        if (this.stack.length !== 0) {
            return this.stack.pop();
        } else {
            return null;
        }
    }

    showQueue() {
        return this.stack;
    }

}

