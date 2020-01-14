export function MergeAndSort(array1: Array<number>, array2: Array<number>) {
    return array1.concat(array2).sort((a, b) => {
        return a - b;
    });

}

