export class Graph<T> {
    adjencies: Map<T, T[]> = new Map();

    public addNode(value: T) {
        this.adjencies.set(value, []);
    }

    public addNodeFromArray(values: T[]): void {
        values.forEach((v: T) => this.addNode(v));
    }

    public addEdge(origin?: T, sibling?: T): void {

        this.adjencies.get(origin).push(sibling);
        this.adjencies.get(sibling).push(origin);
    }

    public removeNode(value: T) {
    }

    public removeEdge(origin: T, sibling: T): void {
    }

    public sort(callback: Function): T[] {
        return [];
    }

    public dump(): void {
        for (let key of Array.from(this.adjencies.keys())) {
            const values = this.adjencies.get(key);
            // @ts-ignore
            console.log(`${key} -> ${values.join(' ')}`);
        }
    }
}

// [
//   "{ value: 1 }" : [{value: 13}]
//   "{ value: 2 }" : []
//   "{ value: 4 }" : []
//   "{ value: 5 }" : []
//   ...
//   "{ value: 13 }" : [{ value: 1 }]

// ]
