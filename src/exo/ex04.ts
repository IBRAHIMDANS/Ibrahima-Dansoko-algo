export class LinkedList {
    private head: LinkedListItem;
    private index: number;

    constructor(item: LinkedListItem) {
        this.head = item;
        this.index = 0;
    }

    appendToTail(value: number) {
        let currentItem: LinkedListItem = this.head;
        let newItem = new LinkedListItem(value);
        if (!currentItem) {
            this.head = newItem;
        } else {
            while (currentItem.next) {
                currentItem = currentItem.next;
            }
            currentItem.next = newItem;
        }
        this.index++;

    }

    deleteNode(index: number) {
        const currentItem = this.head;
        if (index > 0 && index > this.index)
            return -1;
        else {
            let current, preview, item = 0;
            current = this.head;
            preview = current;
            if (index === 0) {
                this.head = current.next;
            } else {
                while (item < index) {
                    item++;
                    preview = current;
                    current = current.next;
                }
                preview.next = current.next;
            }
            this.index--;
            return current.element;
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
    next: LinkedListItem | any;

    constructor(value: any) {
        this.value = value;
        this.next = null;
    }
}
