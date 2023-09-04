const choice = (array) => {
    const idx = Math.floor(Math.random() * (array.length));
    return array[idx];

}

const remove = (array, item) => {

    const idx = array.indexOf(item);
    idx == -1 ? item = undefined : array.splice(idx, 1);
    return item;


}

export { choice, remove }