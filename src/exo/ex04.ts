export class LinkedList {
    private head: LinkedListItem;
    private size: number;

    constructor(item: LinkedListItem) {
        this.head = item;
        this.head.index = this.size = 0;
    }

    appendToTail(value: number) {
        let currentItem: LinkedListItem = this.head;
        let newItem = new LinkedListItem(value, this.head.index);
        if (!currentItem) {
            this.head = newItem;
        } else {
            while (true) {
                if (currentItem.next) {
                    currentItem = currentItem.next;
                } else {
                    currentItem.next = newItem;
                    break;
                }

            }
        }

    }

    deleteNode(index: number) {
        const currentItem = this.head;

        if (!currentItem) {
            return;
        }
        console.log(currentItem);
        if (currentItem.value === index) {
            this.head = currentItem.next;
        }
    }

    showList() {
        let arr = [];
        let currentItem = this.head;

        while (true) {
            arr.push(currentItem.value);
            if (currentItem.next) {
                currentItem = currentItem.next;
            } else {
                break;
            }
        }

        return arr;
    }


}

export class LinkedListItem {
    value: any;
    index: number;
    next: LinkedListItem | any;

    constructor(value: any, index?: number) {
        this.value = value;
        if (!index) {
            this.index = 0;
        } else {
            this.index = index+1;
        }
        this.next = null;
    }
}
