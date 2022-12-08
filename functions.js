const isTheWordSplit = (pArray) => {
    let word = pArray[0];
    let array = pArray[1].split(",");
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i] + array[j] == word) {
                return array[i] + "," + array[j];
            }
        }
    }
    return "not possible";
};

export { isTheWordSplit };
