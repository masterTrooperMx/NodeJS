const forEach = (array, fn) => {
    let i;
    for (let i = 0; i < array.length; i++) {
        fn(array[i]);
    }
}

export default forEach;