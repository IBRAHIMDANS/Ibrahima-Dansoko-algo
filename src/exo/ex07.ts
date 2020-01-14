export class Stack {
    private stack: any[];

    constructor() {
        this.stack = [];
    }

    push(value: any) {
        return this.stack.push(value);
    }

    pop() {
        if (this.stack.length !== 0) {
            return this.stack.shift();
        } else {
            return null
        }
    }

    showStack() {
        return this.stack;
    }

}

